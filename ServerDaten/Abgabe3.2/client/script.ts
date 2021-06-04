namespace Aufgabe3_2 {

    //Synchrone Funktion SendData, welche die URL erweitert
    function sendDataHtml (): void {
        let url: string = "https://gissose2021omb.herokuapp.com";
        //let url: string = "http://localhost:8100/html";
        let formData: FormData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        //query an die Url anhängen
        url = url + "?" + query.toString();
        communicateHtml (url);
    }

    async function communicateHtml (_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let responseString: string = await response.text();
        //HTML Code während der Laufzeit einfügen
        let answerOutput: HTMLElement = document.getElementById("answer");
        answerOutput.innerHTML = responseString;
    }

    function sendDataJson (): void {
        let url: string = "https://gissose2021omb.herokuapp.com";
        //let url: string = "http://localhost:8100/json";
        let formData: FormData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        //query an die Url anhängen
        url = url + "?" + query.toString();
        communicateJson (url);
    }
 
    async function communicateJson (_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let responseString: string = await response.json();
        console.log(responseString);
    }

    //Buttons
    document.querySelector("#sendDataHtml").addEventListener("click", sendDataHtml);
    document.querySelector("#sendDataJson").addEventListener("click", sendDataJson);
}