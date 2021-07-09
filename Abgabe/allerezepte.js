"use strict";
var Semesterabgabe;
(function (Semesterabgabe) {
    document.querySelector(".icon").addEventListener("click", handleClickIcon);
    function handleClickIcon() {
    }
    //Allgemeine url
    let url;
    function freshUrl() {
        url = "https://gissose2021omb.herokuapp.com";
        //url = "http://localhost:8100";
    }
    async function recipes() {
        freshUrl();
        url = url + "/holeRezepte" + "?";
        console.log(url);
        let result = await fetch(url);
        let output = await result.text();
        let objekt = JSON.parse(output);
        let rezept = document.getElementById("neuesRezept");
        let rezeptTitel = document.createElement("h1");
        rezeptTitel.textContent = objekt["titel"];
        rezept.appendChild(rezeptTitel);
        let zutaten = document.createElement("h2");
        zutaten.textContent = "Zutaten";
        rezept.appendChild(zutaten);
        let zutaten1 = document.createElement("p");
        let zutatenliste = "";
        for (let key of Object.keys(objekt)) {
            if (key.includes("zutat")) {
                let value = objekt[key];
                if (value !== "") {
                    zutatenliste += " " + value;
                }
            }
        }
        zutaten1.textContent = zutatenliste.trim(); //entfernt alle Leerzeichen vor und nach dem String
        rezept.appendChild(zutaten1);
        let zubereitung = document.createElement("h2");
        zubereitung.textContent = "Zubereitung";
        rezept.appendChild(zubereitung);
        let zubereitungText = document.createElement("p");
        zubereitungText.textContent = objekt["zubereitung"];
        rezept.appendChild(zubereitungText);
    }
    recipes();
})(Semesterabgabe || (Semesterabgabe = {}));
//# sourceMappingURL=allerezepte.js.map