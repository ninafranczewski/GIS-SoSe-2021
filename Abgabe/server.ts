import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Semesterabgabe {

    let user: Mongo.Collection;
    let recipe: Mongo.Collection;

    //URL für Datenbank
    let mongoURL: string = "mongodb+srv://user-2:user123@clusternina.efcgg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;
    console.log("Starting server on port:" + port);

    //Server erstellen
    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    writeDataBase(mongoURL);

    //Daten aus dem Formular in die Datenbank schreiben
    async function writeDataBase(_mongoUrl: string): Promise<void> {

        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_mongoUrl, options);
        await mongoClient.connect();

        //Datenbank und Collection auswählen
        user = mongoClient.db("OnlineRezepteSammlung").collection("Nutzer");
        recipe = mongoClient.db("OnlineRezepteSammlung").collection("Rezepte");

        console.log("Database connection", user != undefined);
        console.log("Database connection", recipe != undefined);
    }

    function handleListen(): void {
        console.log("Listening");
    }

    class Favorit {
        user: string;
        rezept: string;
        constructor(user: string, rezept: string) {
            this.user = user;
            this.rezept = rezept;
        }
    }


    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {

        console.log("Hearing");

        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");

        if (_request.url) {

            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            console.log(url);

            //Login
            if (url.pathname == "/login") {
                //Request Login
                console.log("Login");

                if (await user.findOne({ "username": url.query.username, "password": url.query.password }))
                    _response.write("true");
                else
                    _response.write("false");
            }

            //neuer Account
            if (url.pathname == "/createAccount") {
                //Request CreateAccount
                console.log("createAccount");

                if (await user.findOne({ "username": url.query.username }))
                    _response.write("false");
                else {
                    let tempArray: Favorit[] = [];
                    user.insertOne({ "username": url.query.username, "password": url.query.password, "favoriten": tempArray });
                    _response.write("true");
                }
            }

            if (url.pathname == "/erstellen") {
                //Request Rezept erstellen
                console.log("Rezept erstellen");
                recipe.insertOne({ "user": url.query.username, "titel": url.query.titel, "zutat1": url.query.zutat1, "zutat2": url.query.zutat2, "zutat3": url.query.zutat3, "zutat4": url.query.zutat4, "zutat5": url.query.zutat5, "zutat6": url.query.zutat6, "zutat7": url.query.zutat7, "zutat8": url.query.zutat8, "zutat9": url.query.zutat9, "zutat10": url.query.zutat10, "zubereitung": url.query.zubereitung });

            }

            if (url.pathname == "/holeRezept") {
                let cursor: Mongo.Cursor = recipe.find({ "user": url.query.username });
                let result = await cursor.toArray();
                _response.write(JSON.stringify(result));
            }

            if (url.pathname == "/holeRezepte") {
                let cursor: Mongo.Cursor = recipe.find();
                let result = await cursor.toArray();
                _response.write(JSON.stringify(result));
            }

            if (url.pathname == "/holeFavRezepte") {
                let user1 = await user.findOne({ "username": url.query.username });
                let favoriten: Favorit[] = user1["favoriten"];
                let result = [];
                for (let favorit of favoriten) {
                    console.log(favorit);
                    let rezeptTitel = await recipe.findOne({ "user": favorit.user, "titel": favorit.rezept })
                    result.push(rezeptTitel);
                    console.log(rezeptTitel);
                    
                    
                }

                _response.write(JSON.stringify(result));
            }

            if (url.pathname == "/fav") {
                let user1 = await user.findOne({ "username": url.query.username });
                let favoriten: Favorit[] = user1["favoriten"];
                let rezeptBesitzer = url.query.rezeptBesitzer
                let rezept = url.query.rezept
                let favorit: Favorit = new Favorit(Array.isArray(rezeptBesitzer)? rezeptBesitzer.join(""):rezeptBesitzer, Array.isArray(rezept)? rezept.join(""):rezept); //Kurzschreibweise if: wenns ein array is dann wird durch join die Arrayelemete ohne "seperator" zusammengefügt, ansosten wird ein string verwendet weil es ein string ist
                
                favoriten.push(favorit);
                
                user.updateOne({ "username": url.query.username }, {$set:{ "favoriten": favoriten }}); //durch set reicht es nur die favoriten anzugeben
                console.log("fertig");
                
                _response.write("added");
            }

            if (url.pathname == "/deleteFav") {
                let user1 = await user.findOne({ "username": url.query.username });
                let favoriten: Favorit[] = user1["favoriten"];
                let favourite = favoriten.find(e => e.rezept == url.query.rezept && e.user == url.query.user);
                favoriten.splice(favoriten.indexOf(favourite), 1);
                user.updateOne({ "username": url.query.username }, {$set:{ "favoriten": favoriten }});
                _response.write("delete");
            }


        }
        _response.end();
    }
}