"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http");
var P_3_1Server;
(function (P_3_1Server) {
    //"Starting Server" wird in der Konsole ausgegeben
    console.log("Starting server");
    //Variable "port" vom Typ Number definieren
    let port = Number(process.env.PORT);
    //port wird auf 8100 geändert falls er nicht gesetzt ist
    if (!port)
        port = 8100;
    //Server erstellen
    let server = Http.createServer();
    //Eventlistener, welcher auf das Event request reagiert & dann die Funktion handleRequest aufruft
    server.addListener("request", handleRequest);
    //Eventlistener, welcher auf das Event listening reagiert & dann die Funktion handleListen aufruft
    server.addListener("listening", handleListen);
    //Server hört dann auf die Variable Port (hier: 8100)
    server.listen(port);
    //Wenn das Event listening ausgelöst wird, wird eine Ausgabe in der Konsole mit "Listening" ausgeben
    function handleListen() {
        console.log("Listening");
    }
    //Wenn das Event request ausgelöst wird, wird diese Funktion aufgerufen und die Übergabeparameter _request und _response übergeben
    function handleRequest(_request, _response) {
        //Konsolenausgabe "I hear voices"
        console.log("I hear voices!");
        //content type und Zeichenset definieren
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //Ausgabe visuell ausgeben
        _response.write(_request.url);
        _response.end();
        //Ausgabe der query
        console.log(_request.url);
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=server.js.map