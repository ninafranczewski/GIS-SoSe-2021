namespace Aufgabe3_4 {
    async function sendData(): Promise <void> {
        let url: string = "https://gissose2021omb.herokuapp.com/sendData";
        
        let formData: FormData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        //query an die Url anhängen
        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        //wenn eine response vorliegt ausgabe tätigen
        if (response != undefined) {
            let answerOutput: HTMLElement = document.getElementById("confirmation");
            answerOutput.textContent = "Daten an Datenbank gesendet";
            console.log("Daten erfolgreich gesendet");
        }
    }

    async function getData(): Promise<void> {
        
        let url: string = "https://gissose2021omb.herokuapp.com/getData";
        let response: Response = await fetch(url);
        let responseString: string = await response.text();
        //HTML Code während der Laufzeit einfügen
        let serverResponse: HTMLElement = document.getElementById("answer");
        serverResponse.innerHTML = responseString;
    }
    
    //Buttons
    document.querySelector("#sendData").addEventListener("click", sendData);
    document.querySelector("#printData").addEventListener("click", getData);
}