import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace P_3_4Server {
    //Interface um die Eingaben zu verarbeiten
    interface OrderInformation {
        name: string;
        gender: string;
        box: string;
    }
    //let mongoUrl: string = "mongodb://localhost:27017";
    //URL für Datenbank
    let mongoUrl: string = "mongodb+srv://new-user1:<password>@clusternina.efcgg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;
    console.log("Starting server on port:" + port);
    //Server erstellen
    let server: Http.Server = Http.createServer();
    server.listen(port);
    server.addListener("request", handleRequest);
    

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("Heariing");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //URL parsen
        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        let jsonString: string = JSON.stringify(url.query);
        //Die zwei Buttons der HTML-Seite unterscheiden
        if (url.pathname == "/sendData") {
            writeDataBase(jsonString, mongoUrl);
        }
        if (url.pathname == "/getData") {
            getData(_response, mongoUrl);
        }
    }

    //Daten aus dem Formular in die Datenbank schreiben
    async function writeDataBase(_jsonString: string, _mongoUrl: string): Promise <void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_mongoUrl, options);
        await mongoClient.connect();
        //Datenbank und Collection auswählen
        let orders: Mongo.Collection = mongoClient.db("Test").collection("Mensch");
        //Hier die Daten aus der URL parsen und über das Interface in die Variable legen
        let order: OrderInformation = JSON.parse(_jsonString);
        orders.insertOne(order);
        console.log("Database connection", orders != undefined);
    }
    //Daten aus der Datenbank auslesen und dann an den Client schicken
    async function getData(_response: Http.ServerResponse, _mongoUrl: string): Promise <void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_mongoUrl, options);
        await mongoClient.connect();
        //Datenbank und Collection auswählen
        let orders: Mongo.Collection = mongoClient.db("Test").collection("Mensch");
        //cursor auf die Datenbank legen und als Rückgabe ein OrderInformation(Interface!) Array erhalten
        let cursor: Mongo.Cursor = orders.find();
        let result: OrderInformation[] = await cursor.toArray();
        //Ausgabe auf der HTML-Seite
        //Überschrift
        _response.write("<h3>" + "Serverantwort:" + "</h3>");
        //Für die Länge des Arrays jeden Wert ausgeben
        for (let i: number = 0; i < result.length; i++) {
            _response.write("<div>" + 
            "<h4>" + "Eintrag" + i + "</h4>" +
            "<p>" + result[i].name + "</p>" +
            "<p>" + result[i].gender + "</p>" +
            "<p>" + result[i].box + "</p>" +
            "</div>");
        }
        _response.end();
    }
}