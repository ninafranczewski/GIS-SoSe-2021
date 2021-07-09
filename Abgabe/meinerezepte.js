"use strict";
var Semesterabgabe;
(function (Semesterabgabe) {
    //Allgemeine url
    let url;
    function freshUrl() {
        url = "https://gissose2021omb.herokuapp.com";
        //url = "http://localhost:8100";
    }
    //Buttons
    let bearbeiten = document.getElementById("edit");
    bearbeiten.addEventListener("click", handleClickEdit);
    let löschen = document.getElementById("delete");
    löschen.addEventListener("click", handleClickDelete);
    let erstellen = document.getElementById("submit");
    erstellen.addEventListener("click", handleClickSubmit);
    async function handleClickSubmit() {
        let formData = new FormData(document.forms[0]);
        console.log("Formulardaten " + formData);
        freshUrl();
        let query = new URLSearchParams(formData);
        url = url + "/erstellen" + "?" + query.toString();
        console.log(url);
        let submit = await fetch(url);
        let submitS = await submit.text();
        let data = document.getElementById("server");
        data.innerHTML = submitS;
        await fetch(url);
        loadRecipe(query.get("titel"));
    }
    async function loadRecipe(nameRezept) {
        freshUrl();
        url = url + "/holeRezept" + "?titel=" + nameRezept;
        console.log(url);
        let result = await fetch(url);
        let output = await result.text();
        let objekt = JSON.parse(output);
        let rezept = document.getElementById("neuesRezept");
        let rezeptTitel = document.createElement("h1");
        rezeptTitel.textContent = nameRezept;
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
    async function handleClickEdit() {
    }
    async function handleClickDelete() {
    }
})(Semesterabgabe || (Semesterabgabe = {}));
//# sourceMappingURL=meinerezepte.js.map