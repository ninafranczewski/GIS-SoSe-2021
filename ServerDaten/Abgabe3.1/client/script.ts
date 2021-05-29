namespace Aufgabe3_1 {
    
    function sendData (): void { //Synchrone Funktion SendData, welche die URL erwitert
        let formData: FormData = new FormData(document.forms[0]); //Daten aus Formular auslesen
        let url: RequestInfo = "https://gissose2021omb.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData); 
        url = url + "?" + query.toString(); //query an die Url anhängen
        
        communicate (url); // schickt die Anfrage per fetch an den server
    }
    document.querySelector("#sendData").addEventListener("click", sendData);


    async function communicate (_url: RequestInfo): Promise<void> {
        //Anfrage an den Server
        let response: Response = await fetch(_url);
        //Antwort vom server
        let responseString: string = await response.text();
        console.log(responseString);
    }
}