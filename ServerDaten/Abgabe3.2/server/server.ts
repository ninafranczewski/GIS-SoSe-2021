import * as Http from "http";
import * as Url from "url";

export namespace P_3_2Server {
    interface ClientInformation {
        prename: string;
        lastname: string;
        postcode: string;
        adress: string;
    }


    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;
    console.log("Starting server on port:" + port);
    //Server erstellen
    let server: Http.Server = Http.createServer();
    server.listen(port);
    server.addListener("request", handleRequest);
    
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("Hearing");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            //URL parsen
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);           
            //Über den Pfad auslesen, was nun getan werden soll
            let clientInformation: ClientInformation = { prename: "huhu", lastname: "", postcode: "",  adress: ""};
            //JSON string erstellen
            let jsonString: string = JSON.stringify(url.query);

            //HTML
            if (url.pathname == "/html") {
                //Ausgabe in Html Code
                //JSON String in interface legen
                clientInformation = JSON.parse(jsonString);
                //Überschrift
                _response.write("<h3>" + "Serverantwort:" + "</h3>");
                _response.write("<p>" + clientInformation.prename + "</p>");
                _response.write("<p>" + clientInformation.lastname + "</p>");
                _response.write("<p>" + clientInformation.postcode + "</p>");
                _response.write("<p>" + clientInformation.adress + "</p>");
            }

            //JSON
            if (url.pathname == "/json") {
                console.log(jsonString);
                _response.write(jsonString);
            }
        } 
        _response.end();
    }
}