import * as Http from "http";
import * as Url from "url";

export namespace P_3_2Server {
    console.log("Starting server");
    let port: number = Number(process.env.PORT);        //create Port = "Gateway" to server
    if (!port)
        port = 8100;                                    //set port to 8100 (if it wasn't before) 

    let server: Http.Server = Http.createServer();      //create server
    server.addListener("request", handleRequest);       //Listener for Requests and Listen functions
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {                     //function Listen with console output
        console.log("Listening");
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {      //function Request granting access for everyone and giving back the sent message url
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");  
        
        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let path: string = <string>url.pathname; 
            if (path == "/html") {
                for (let key in url.query) {
                    _response.write(key + ":" + url.query[key]);
                }
            }
            if (path == "/json") {
                path = path.substring(6, path.length - 1);
                let sentObject: string = JSON.stringify(url.query);
                console.log(sentObject);
                _response.write(sentObject);
                
            }
        }
        _response.end();
    }


}