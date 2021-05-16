namespace Aufgabe2_4 {
/*function Div(_part: junge, _index: number): HTMLDivElement {
    
    let div: HTMLDivElement = document.createElement("div");
    div.classList.add("junge");

    //image anzeigen
    let img: HTMLImageElement = document.createElement("img");
    img.src = _part.image;
    div.appendChild(img);

    imagebeschreibung
    let span: HTMLSpanElement = document.createElement("span");
    span.innerText = _part.origin;
    div.appendChild(span);

    //Button
    let botton: HTMLButtonElement = document.createElement("button");
    botton.innerText = "Select";
    // Möglichkeit 1: innere Funktion
    botton.addEventListener("click", handleSelection);

    // Möglichkeit 2: äußere Funktion 
    botton.addEventListener("click", handleSelection2);
    botton.dataset.index = _index.toString();

    div.appendChild(botton);

    return div;

    function handleSelection(_e: Event): void {
      console.log("innere Funktion", _part);
    }
  }

  function handleSelection2(_e: Event): void {
    let target: HTMLElement = <HTMLElement> _e.currentTarget;
    let index: number = Number(target.dataset.index);

    console.log("äußere Funktion", parts.heads[index]);
  }

  function showPossibilities(_parts: junge[]): void {
    let wrapper: HTMLDivElement = <HTMLDivElement> document.getElementById("selection");
    for (let i: number = 0; i < _parts.length; i++) {
      let div: HTMLDivElement = Div(_parts[i], i);
      wrapper.appendChild(div);
    }
  }

  showPossibilities(parts.heads);
} */

let alleObjekte: AllParts = JSON.parse(partsJSON);
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

    if (document.querySelector("title").getAttribute("id") == "ersteseite") {
        for (let i: number = 0; i < alleObjekte.heads.length; i++) {
            let allPartsElemente: HTMLElement = createOptions(alleObjekte.heads[i]);
            document.body.appendChild(allPartsElemente);
            console.log(allPartsElemente);
        }

    }
    if (document.querySelector("title").getAttribute("id") == "zweiteseite") {
        for (let i: number = 0; i < alleObjekte.torsos.length; i++) {
            let allPartsElemente: HTMLElement = createOptions(alleObjekte.torsos[i]);
            document.body.appendChild(allPartsElemente);
            console.log(allPartsElemente);
        }

    }
    if (document.querySelector("title").getAttribute("id") == "dritteseite") {
        for (let i: number = 0; i < alleObjekte.legs.length; i++) {
            let allPartsElemente: HTMLElement = createOptions(alleObjekte.legs[i]);
            document.body.appendChild(allPartsElemente);
            console.log(allPartsElemente);
        }

    }

    function speichern(_input: MouseEvent): void {
        let output: HTMLElement = <HTMLElement>_input.target;

        if (document.querySelector("title").getAttribute("id") == "ersteseite") {
            console.log(output.dataset.speicherart);
            localStorage.setItem("yourhead", output.dataset.speicherart);
            localStorage.setItem("yourimg", output.dataset.speicherimage);
            // console.log(localStorage.getItem("yourehead"));
            //console.log(localStorage.getItem("yourimg")); 
        }
       
        if (document.querySelector("title").getAttribute("id") == "zweiteseite") {
            console.log(output.dataset.speicherart);
            localStorage.setItem("yourtorso", output.dataset.speicherart);
            localStorage.setItem("yourtorsoimage", output.dataset.speicherimage);
            // console.log(localStorage.getItem("yourehead"));
            //console.log(localStorage.getItem("yourimg")); 
        }
       
        if (document.querySelector("title").getAttribute("id") == "dritteseite") {
            console.log(output.dataset.speicherart);
            localStorage.setItem("yourlegs", output.dataset.speicherart);
            localStorage.setItem("yourlegsimage", output.dataset.speicherimage);
            // console.log(localStorage.getItem("yourehead"));
            //console.log(localStorage.getItem("yourimg")); 
        }
       
    }
    if (document.querySelector("title").getAttribute("id") == "zweiteseite") {
        let div: HTMLDivElement = document.createElement("div");
        div.style.maxWidth = "250px";
        document.body.appendChild(div);
     
      
        let img: HTMLImageElement = document.createElement("img");
        img.src = localStorage.getItem("yourimg");
        img.style.width = "100%";
        div.appendChild(img);
    }
    if (document.querySelector("title").getAttribute("id") == "dritteseite") {
        let div: HTMLDivElement = document.createElement("div");
        div.style.maxWidth = "250px";
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
        div.style.maxWidth = "250px";
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

}