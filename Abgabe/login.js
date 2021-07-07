"use strict";
var Semesterabgabe;
(function (Semesterabgabe) {
    //Zwischen Login- und CreateAccount-Formular wechseln
    let loginForm = document.getElementById("login");
    let createAccountForm = document.getElementById("createAccount");
    document.querySelector("#linkCreateAccount").addEventListener("click", handleClickCreateAccount);
    function handleClickCreateAccount() {
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    }
    document.querySelector("#linkLogin").addEventListener("click", handleClickLogin);
    function handleClickLogin() {
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    }
    //Allgemeine url
    let url;
    function freshUrl() {
        url = "https://gissose2021omb.herokuapp.com";
        //url = "http://localhost:8100";
    }
    //Buttons
    document.getElementById("anmelden").addEventListener("click", handleClickButtonAnmelden);
    document.getElementById("registrieren").addEventListener("click", handleClickButtonJetztRegistrieren);
    async function handleClickButtonAnmelden() {
        //Nutzer in Datenbank angelegt?
        freshUrl();
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        //query an die Url anhängen
        url = url + "/login" + "?" + query.toString();
        await fetch(url);
    }
    async function handleClickButtonJetztRegistrieren() {
        //neuen Nutzer in Datenbank einfügen
        freshUrl();
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        //query an die Url anhängen
        url = url + "/login" + "?" + query.toString();
        await fetch(url);
    }
})(Semesterabgabe || (Semesterabgabe = {}));
//# sourceMappingURL=login.js.map