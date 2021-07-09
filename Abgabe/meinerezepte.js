"use strict";
var Semesterabgabe;
(function (Semesterabgabe) {
    //Allgemeine url
    let url;
    function freshUrl() {
        //url = "https://gissose2021omb.herokuapp.com"
        url = "http://localhost:8100";
    }
    //Buttons
    let bearbeiten = document.getElementById("edit");
    bearbeiten.addEventListener("click", handleClickEdit);
    let löschen = document.getElementById("delete");
    löschen.addEventListener("click", handleClickDelete);
    let erstellen = document.getElementById("create");
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
    }
    async function handleClickEdit() {
    }
    async function handleClickDelete() {
    }
})(Semesterabgabe || (Semesterabgabe = {}));
//# sourceMappingURL=meinerezepte.js.map