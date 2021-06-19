"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_4Server = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var P_3_4Server;
(function (P_3_4Server) {
    //URL für Datenbank
    let mongoUrl = "mongodb+srv://new-user1:user123@clusternina.efcgg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    console.log("Starting server on port:" + port);
    //Server erstellen
    let server = Http.createServer();
    server.listen(port);
    server.addListener("request", handleRequest);
    function handleRequest(_request, _response) {
        console.log("Hearing");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //URL parsen
        let url = Url.parse(_request.url, true);
        let jsonString = JSON.stringify(url.query);
        //Die zwei Buttons der HTML-Seite unterscheiden
        if (url.pathname == "/sendData") {
            writeDataBase(jsonString, mongoUrl);
        }
        if (url.pathname == "/getData") {
            getData(_response, mongoUrl);
        }
    }
    //Daten aus dem Formular in die Datenbank schreiben
    async function writeDataBase(_jsonString, _mongoUrl) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_mongoUrl, options);
        await mongoClient.connect();
        //Datenbank und Collection auswählen
        let orders = mongoClient.db("Test").collection("Mensch");
        //Hier die Daten aus der URL parsen und über das Interface in die Variable legen
        let order = JSON.parse(_jsonString);
        orders.insertOne(order);
        console.log("Database connection", orders != undefined);
    }
    //Daten aus der Datenbank auslesen und dann an den Client schicken
    async function getData(_response, _mongoUrl) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_mongoUrl, options);
        await mongoClient.connect();
        //Datenbank und Collection auswählen
        let orders = mongoClient.db("Test").collection("Mensch");
        //cursor auf die Datenbank legen und als Rückgabe ein OrderInformation(Interface!) Array erhalten
        let cursor = orders.find();
        let result = await cursor.toArray();
        //Ausgabe auf der HTML-Seite
        //Überschrift
        _response.write("<h3>" + "Serverantwort:" + "</h3>");
        //Für die Länge des Arrays jeden Wert ausgeben
        for (let i = 0; i < result.length; i++) {
            _response.write("<div>" +
                "<h4>" + "Eintrag" + i + "</h4>" +
                "<p>" + result[i].name + "</p>" +
                "<p>" + result[i].gender + "</p>" +
                "<p>" + result[i].box + "</p>" +
                "</div>");
        }
        _response.end();
    }
})(P_3_4Server = exports.P_3_4Server || (exports.P_3_4Server = {}));
//# sourceMappingURL=server.js.map