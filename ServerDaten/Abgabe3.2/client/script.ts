namespace P_3_2Server {
    
    let displayResponse: HTMLParagraphElement = <HTMLDivElement>document.getElementById("answer");
    async function sendDataHTML(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);


        let _url: RequestInfo = "https://gissose2021omb.herokuapp.com";
        _url += "/html";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();
        let answer: Response = await fetch(_url);
        let output: string = await answer.text();
        displayResponse.innerText = output;
    }
    async function sendDataJSON(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
     


        let _url: RequestInfo = "https://gissose2021omb.herokuapp.com";
        _url += "/json";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();
        let answer: Response = await fetch(_url);
        //let output: string = await answer.text();
        //let jsonOutput: string =  output.substring(6, output.length - 1);
        let output: JsonAnswer = await answer.json();
        //console.log(output.substring(6, output.length - 1));

        console.log("JSON: Antwort:");
        console.log(output);
        displayResponse.innerHTML = output.prename;
        console.log(displayResponse);
        console.log(answer);


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