namespace Aufgabe2_5 {

    function createOptions(_part: Junge): HTMLElement {
        let div: HTMLDivElement = document.createElement("div");
        div.style.maxWidth = "150px";
        let img: HTMLImageElement = document.createElement("img");
        img.src = _part.image;
        img.style.width = "100%";
        div.appendChild(img);
        let chooseButton: HTMLElement = document.createElement("Button");
        let textChooseButton: Text = document.createTextNode(_part.origin);
        chooseButton.appendChild(textChooseButton);
        document.body.appendChild(chooseButton);
        chooseButton.addEventListener("click", speichern);
        chooseButton.dataset.speicherart = _part.origin;
        chooseButton.dataset.speicherimage = _part.image;
        return div;

    }

    function auswahl(allObjects: AllParts): void {
    if (document.querySelector("title").getAttribute("id") == "ersteseite") {
        for (let i: number = 0; i < allObjects.heads.length; i++) {
            let allPartsElemente: HTMLElement = createOptions(allObjects.heads[i]);
            document.body.appendChild(allPartsElemente);
            console.log(allPartsElemente);
        }

    }
    if (document.querySelector("title").getAttribute("id") == "zweiteseite") {
        for (let i: number = 0; i < allObjects.torsos.length; i++) {
            let allPartsElemente: HTMLElement = createOptions(allObjects.torsos[i]);
            document.body.appendChild(allPartsElemente);
            console.log(allPartsElemente);
        }

    }
    if (document.querySelector("title").getAttribute("id") == "dritteseite") {
        for (let i: number = 0; i < allObjects.legs.length; i++) {
            let allPartsElemente: HTMLElement = createOptions(allObjects.legs[i]);
            document.body.appendChild(allPartsElemente);
            console.log(allPartsElemente);
        }

    }
}

    function speichern(_input: MouseEvent): void {
        let output: HTMLElement = <HTMLElement>_input.target;

        if (document.querySelector("title").getAttribute("id") == "ersteseite") {
            console.log(output.dataset.speicherart);
            localStorage.setItem("yourhead", output.dataset.speicherart);
            localStorage.setItem("yourimg", output.dataset.speicherimage); 
        }
       
        if (document.querySelector("title").getAttribute("id") == "zweiteseite") {
            console.log(output.dataset.speicherart);
            localStorage.setItem("yourtorso", output.dataset.speicherart);
            localStorage.setItem("yourtorsoimage", output.dataset.speicherimage);
        }
       
        if (document.querySelector("title").getAttribute("id") == "dritteseite") {
            console.log(output.dataset.speicherart);
            localStorage.setItem("yourlegs", output.dataset.speicherart);
            localStorage.setItem("yourlegsimage", output.dataset.speicherimage);
        }
       
    }
    if (document.querySelector("title").getAttribute("id") == "zweiteseite") {
        let div: HTMLDivElement = document.createElement("div");
        div.style.maxWidth = "200px";
        document.body.appendChild(div);
     
      
        let img: HTMLImageElement = document.createElement("img");
        img.src = localStorage.getItem("yourimg");
        img.style.width = "100%";
        div.appendChild(img);
    }
    if (document.querySelector("title").getAttribute("id") == "dritteseite") {
        let div: HTMLDivElement = document.createElement("div");
        div.style.maxWidth = "200px";
        document.body.appendChild(div);

        let img: HTMLImageElement = document.createElement("img");
        img.src = localStorage.getItem("yourimg");
        img.style.width = "100%";
        div.appendChild(img);

        let torsoimage: HTMLImageElement = document.createElement("img");
        torsoimage.src = localStorage.getItem("yourtorsoimage");
        torsoimage.style.width = "100%";
        div.appendChild(torsoimage);
    }
    if (document.querySelector("title").getAttribute("id") == "vierteseite") {
        let div: HTMLDivElement = document.createElement("div");
        div.style.maxWidth = "200px";
        document.body.appendChild(div);
        
        let img: HTMLImageElement = document.createElement("img");
        img.src = localStorage.getItem("yourimg");
        img.style.width = "100%";
        div.appendChild(img);
        
        let torsoimage: HTMLImageElement = document.createElement("img");
        torsoimage.src = localStorage.getItem("yourtorsoimage");
        torsoimage.style.width = "100%";
        div.appendChild(torsoimage);
        
        let legsimage: HTMLImageElement = document.createElement("img");
        legsimage.src = localStorage.getItem("yourlegsimage");
        legsimage.style.width = "100%";
        div.appendChild(legsimage);
        
    }

    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        console.log("Response", response);
        let s: AllParts = await response.json();
        console.log(s);
        auswahl(s);

    }
    export interface Answer {
        [key: string]: string;
    }
    communicate("https://ninafranczewski.github.io/GIS-SoSe-2021/JavaScript/Aufgabe2.5/data.json");

    async function Daten(_url: RequestInfo): Promise <void> {
        let query: URLSearchParams = new URLSearchParams(localStorage);
        _url = _url + "?" + query.toString();
        let answer: Response = await fetch(_url);
        let output: Answer = await answer.json();
        let displayResponse: HTMLDivElement = <HTMLParagraphElement>document.getElementById("3c");
        if (output.error) {
            displayResponse.className = "Error";
            displayResponse.innerText = output.error;
        }
        
        else {
            displayResponse.className = "Message";
            displayResponse.innerText = output.Message;
        }
    }
    Daten("https://gis-communication.herokuapp.com");

}