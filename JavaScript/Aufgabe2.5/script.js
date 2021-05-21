"use strict";
var Aufgabe2_5;
(function (Aufgabe2_5) {
    function createOptions(_part) {
        let div = document.createElement("div");
        div.style.maxWidth = "150px";
        let img = document.createElement("img");
        img.src = _part.image;
        img.style.width = "100%";
        div.appendChild(img);
        let chooseButton = document.createElement("Button");
        let textChooseButton = document.createTextNode(_part.origin);
        chooseButton.appendChild(textChooseButton);
        document.body.appendChild(chooseButton);
        chooseButton.addEventListener("click", speichern);
        chooseButton.dataset.speicherart = _part.origin;
        chooseButton.dataset.speicherimage = _part.image;
        return div;
    }
    function auswahl(alleObjekte) {
        if (document.querySelector("title").getAttribute("id") == "ersteseite") {
            for (let i = 0; i < alleObjekte.heads.length; i++) {
                let allPartsElemente = createOptions(alleObjekte.heads[i]);
                document.body.appendChild(allPartsElemente);
                console.log(allPartsElemente);
            }
        }
        if (document.querySelector("title").getAttribute("id") == "zweiteseite") {
            for (let i = 0; i < alleObjekte.torsos.length; i++) {
                let allPartsElemente = createOptions(alleObjekte.torsos[i]);
                document.body.appendChild(allPartsElemente);
                console.log(allPartsElemente);
            }
        }
        if (document.querySelector("title").getAttribute("id") == "dritteseite") {
            for (let i = 0; i < alleObjekte.legs.length; i++) {
                let allPartsElemente = createOptions(alleObjekte.legs[i]);
                document.body.appendChild(allPartsElemente);
                console.log(allPartsElemente);
            }
        }
    }
    function speichern(_input) {
        let output = _input.target;
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
        let div = document.createElement("div");
        div.style.maxWidth = "200px";
        document.body.appendChild(div);
        let img = document.createElement("img");
        img.src = localStorage.getItem("yourimg");
        img.style.width = "100%";
        div.appendChild(img);
    }
    if (document.querySelector("title").getAttribute("id") == "dritteseite") {
        let div = document.createElement("div");
        div.style.maxWidth = "200px";
        document.body.appendChild(div);
        let img = document.createElement("img");
        img.src = localStorage.getItem("yourimg");
        img.style.width = "100%";
        div.appendChild(img);
        let torsoimage = document.createElement("img");
        torsoimage.src = localStorage.getItem("yourtorsoimage");
        torsoimage.style.width = "100%";
        div.appendChild(torsoimage);
    }
    if (document.querySelector("title").getAttribute("id") == "vierteseite") {
        let div = document.createElement("div");
        div.style.maxWidth = "200px";
        document.body.appendChild(div);
        let img = document.createElement("img");
        img.src = localStorage.getItem("yourimg");
        img.style.width = "100%";
        div.appendChild(img);
        let torsoimage = document.createElement("img");
        torsoimage.src = localStorage.getItem("yourtorsoimage");
        torsoimage.style.width = "100%";
        div.appendChild(torsoimage);
        let legsimage = document.createElement("img");
        legsimage.src = localStorage.getItem("yourlegsimage");
        legsimage.style.width = "100%";
        div.appendChild(legsimage);
    }
    async function communicate(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
        let s = await response.json();
        console.log(s);
        auswahl(s);
    }
    communicate("https://niconaicro.github.io/GIS-SOSe-2021/Aufgabe2.5/data.json");
    async function Daten(_url) {
        let query = new URLSearchParams(localStorage);
        _url = _url + "?" + query.toString();
        let answer = await fetch(_url);
        let output = await answer.json();
        let displayResponse = document.getElementById("3c");
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
})(Aufgabe2_5 || (Aufgabe2_5 = {}));
//# sourceMappingURL=script.js.map