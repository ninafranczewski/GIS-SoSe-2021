"use strict";
var P_3_2Server;
(function (P_3_2Server) {
    let displayResponse = document.getElementById("answer");
    async function sendDataHTML() {
        let formData = new FormData(document.forms[0]);
        let _url = "https://gissose2021omb.herokuapp.com";
        _url += "/html";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let answer = await fetch(_url);
        let output = await answer.text();
        displayResponse.innerHTML = output;
    }
    async function sendDataJSON() {
        let formData = new FormData(document.forms[0]);
        let _url = "https://gissose2021omb.herokuapp.com";
        _url += "/json";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let answer = await fetch(_url);
        let output = await answer.json();
        displayResponse.innerHTML += "Vorname: " + output.prename + "Nachname: " + output.lastname + "Postleitzahl: " + output.postcode + "Adresse: " + output.adress;
        console.log(answer);
        console.log(output);
    }
    let sendButtonHTML = document.getElementById("htmlbutton");
    sendButtonHTML.addEventListener("click", sendDataHTML);
    let sendButtonJSON = document.getElementById("jsonbutton");
    sendButtonJSON.addEventListener("click", sendDataJSON);
})(P_3_2Server || (P_3_2Server = {}));
//# sourceMappingURL=script.js.map