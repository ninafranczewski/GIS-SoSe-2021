import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";
//import * as Interface from "./interface";


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

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {

        console.log("Hearing");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {

            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            
            //LOGIN
            if (url.pathname == "/login") {
                //Request LOGIN
                _response.setHeader("content-type", "text/html; charset=utf-8");
                _response.setHeader("Access-Control-Allow-Origin", "*");

                user.insertOne(url.query);

                _response.write(JSON.stringify(await(user.find().toArray())));
            }

        }

    }
}