namespace P_3_2Server {
    let displayResponse: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("answer");
    async function sendDataHTML(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
    
        let _url: RequestInfo = "https://gissose2021omb.herokuapp.com";
        _url += "/html";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();
        let answer: Response = await fetch(_url);
        let output: string = await answer.text();
        displayResponse.innerHTML = output;
    }
    async function sendDataJSON(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
     
        let _url: RequestInfo = "https://gissose2021omb.herokuapp.com";
        _url += "/json";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();
        let answer: Response = await fetch(_url);
        let output: JsonAnswer = await answer.json();
        displayResponse.innerHTML += "Vorname: " + output.prename + " Nachname: " + output.lastname + " Postleitzahl: " +  output.postcode + " Adresse: " +  output.adress;
        console.log(answer);
        console.log(output);
        


    }

    let sendButtonHTML: HTMLButtonElement = <HTMLButtonElement>document.getElementById("htmlbutton");
    sendButtonHTML.addEventListener("click", sendDataHTML);
    let sendButtonJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("jsonbutton");
    sendButtonJSON.addEventListener("click", sendDataJSON);

    interface JsonAnswer {
        prename: string;
        lastname: string;
        postcode: string;
        adress: string;
    }
}