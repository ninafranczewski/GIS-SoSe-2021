"use strict";
var Aufgabe3_1;
(function (Aufgabe3_1) {
    function sendData() {
        let formData = new FormData(document.forms[0]); //Daten aus Formular auslesen
        let url = "https://gissose2021omb.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString(); //query an die Url anhängen
        communicate(url); // schickt die Anfrage per fetch an den server
    }
    document.querySelector("#sendData").addEventListener("click", sendData);
    async function communicate(_url) {
        //Anfrage an den Server
        let response = await fetch(_url);
        //Antwort vom server
        let responseString = await response.text();
        console.log(responseString);
    }
})(Aufgabe3_1 || (Aufgabe3_1 = {}));
//# sourceMappingURL=script.js.map