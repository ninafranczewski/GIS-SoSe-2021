"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Semesterabgabe = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
//import * as Interface from "./interface";
var Semesterabgabe;
(function (Semesterabgabe) {
    let user;
    let recipe;
    //URL für Datenbank
    let mongoURL = "mongodb+srv://user-2:user123@clusternina.efcgg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    console.log("Starting server on port:" + port);
    //Server erstellen
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    writeDataBase(mongoURL);
    //Daten aus dem Formular in die Datenbank schreiben
    async function writeDataBase(_mongoUrl) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_mongoUrl, options);
        await mongoClient.connect();
        //Datenbank und Collection auswählen
        user = mongoClient.db("OnlineRezepteSammlung").collection("Nutzer");
        recipe = mongoClient.db("OnlineRezepteSammlung").collection("Rezepte");
        console.log("Database connection", user != undefined);
        console.log("Database connection", recipe != undefined);
    }
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        console.log("Hearing");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            //LOGIN
            if (url.pathname == "/login") {
                //Request LOGIN
                _response.setHeader("content-type", "text/html; charset=utf-8");
                _response.setHeader("Access-Control-Allow-Origin", "*");
                user.insertOne(url.query);
                _response.write(JSON.stringify(await (user.find().toArray())));
            }
        }
    }
})(Semesterabgabe = exports.Semesterabgabe || (exports.Semesterabgabe = {}));
//# sourceMappingURL=server.js.map