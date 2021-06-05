"use strict";
var Aufgabe3_2;
(function (Aufgabe3_2) {
    let displayResponse = document.getElementById("answer");
    async function sendDataHTML() {
        let formData = new FormData(document.forms[0]);
        console.log(":" + formData.get("name"));
        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let _url = "https://gissose2021omb.herokuapp.com";
        _url += "/html";
        _url = _url + "?" + query.toString();
        let answer = await fetch(_url);
        let output = await answer.text();
        displayResponse.innerText = output;
    }
    async function sendDataJSON() {
        let formData = new FormData(document.forms[0]);
        console.log(":" + formData.get("name"));
        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let _url = "https://gissose2021omb.herokuapp.com";
        _url += "/json";
        _url = _url + "?" + query.toString();
        let answer = await fetch(_url);
        let output = await answer.json();
        displayResponse.innerHTML = output.prename + " " + output.lastname + " " + output.postcode + " " + output.adress;
    }
    let sendButtonHTML = document.getElementById("htmlbutton");
    sendButtonHTML.addEventListener("click", sendDataHTML);
    let sendButtonJSON = document.getElementById("jsonbutton");
    sendButtonJSON.addEventListener("click", sendDataJSON);
})(Aufgabe3_2 || (Aufgabe3_2 = {}));
//# sourceMappingURL=script.js.map