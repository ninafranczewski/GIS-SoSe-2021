"use strict";
var Semesterabgabe;
(function (Semesterabgabe) {
    //Allgemeine url
    let url;
    function freshUrl() {
        url = "https://gissose2021omb.herokuapp.com";
        //url = "http://localhost:8100";
    }
    //Button
    let erstellen = document.getElementById("submit");
    erstellen.addEventListener("click", handleClickSubmit);
    async function handleClickSubmit() {
        let formData = new FormData(document.forms[0]);
        console.log("Formulardaten " + formData);
        freshUrl();
        let query = new URLSearchParams(formData);
        let username = localStorage.getItem("username");
        url = url + "/erstellen" + "?" + query.toString() + "&username=" + username;
        console.log(url);
        let submit = await fetch(url);
        let submitS = await submit.text();
        let data = document.getElementById("server");
        data.innerHTML = submitS;
        loadRecipe();
    }
    async function loadRecipe() {
        freshUrl();
        let username = localStorage.getItem("username");
        url = url + "/holeRezept" + "?username=" + username;
        console.log(url);
        let result = await fetch(url);
        let output = await result.text();
        let objekt = JSON.parse(output);
        let rezept = document.getElementById("neuesRezept");
        rezept.innerHTML = "";
        console.log(objekt);
        for (let rezeptEintrag of objekt) {
            let blogPost = document.createElement("div");
            rezept.appendChild(blogPost);
            let blogPostInfo = document.createElement("div");
            blogPost.appendChild(blogPostInfo);
            let rezeptTitel = document.createElement("h1");
            rezeptTitel.textContent = rezeptEintrag["titel"];
            blogPostInfo.appendChild(rezeptTitel);
            let zutaten = document.createElement("h2");
            zutaten.textContent = "Zutaten";
            blogPostInfo.appendChild(zutaten);
            let zutaten1 = document.createElement("p");
            let zutatenliste = "";
            for (let key of Object.keys(rezeptEintrag)) {
                if (key.includes("zutat")) {
                    let value = rezeptEintrag[key];
                    if (value !== "") {
                        zutatenliste += " " + value;
                    }
                }
            }
            zutaten1.textContent = zutatenliste.trim(); //entfernt alle Leerzeichen vor und nach dem String
            blogPostInfo.appendChild(zutaten1);
            let zubereitung = document.createElement("h2");
            zubereitung.textContent = "Zubereitung";
            blogPostInfo.appendChild(zubereitung);
            let zubereitungText = document.createElement("p");
            zubereitungText.textContent = rezeptEintrag["zubereitung"];
            blogPostInfo.appendChild(zubereitungText);
            let deleteRecipe = document.createElement("button");
            deleteRecipe.textContent = "Löschen";
            deleteRecipe.addEventListener("click", () => handleClickDelete(rezeptEintrag["titel"]));
            blogPostInfo.appendChild(deleteRecipe);
        }
    }
    async function handleClickDelete(rezeptName) {
        freshUrl();
        let username = localStorage.getItem("username");
        url = url + "/loescheRezept" + "?username=" + username + "&rezeptName=" + rezeptName;
        console.log(url);
        await fetch(url);
        loadRecipe();
    }
    loadRecipe();
})(Semesterabgabe || (Semesterabgabe = {}));
//# sourceMappingURL=meinerezepte.js.map