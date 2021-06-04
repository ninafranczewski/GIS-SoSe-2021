"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_2Server = void 0;
const Http = require("http");
const Url = require("url");
var P_3_2Server;
(function (P_3_2Server) {
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
        if (_request.url) {
            //URL parsen
            let url = Url.parse(_request.url, true);
            //Über den Pfad auslesen, was nun getan werden soll
            let clientInformation = { prename: "huhu", lastname: "", age: "", postcode: "" };
            //JSON string erstellen
            let jsonString = JSON.stringify(url.query);
            //HTML
            if (url.pathname == "/html") {
                //Ausgabe in Html Code
                //JSON String in interface legen
                clientInformation = JSON.parse(jsonString);
                //Überschrift
                _response.write("<h3>" + "Serverantwort:" + "</h3>");
                _response.write("<p>" + clientInformation.prename + "</p>");
                _response.write("<p>" + clientInformation.lastname + "</p>");
                _response.write("<p>" + clientInformation.age + "</p>");
                _response.write("<p>" + clientInformation.postcode + "</p>");
            }
            //JSON
            if (url.pathname == "/json") {
                console.log(jsonString);
                _response.write(jsonString);
            }
        }
        _response.end();
    }
})(P_3_2Server = exports.P_3_2Server || (exports.P_3_2Server = {}));
//# sourceMappingURL=server.js.map