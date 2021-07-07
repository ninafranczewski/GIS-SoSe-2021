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
    let loginButton = document.getElementById("anmelden");
    loginButton.addEventListener("click", handleClickButtonAnmelden);
    let registerButton = document.getElementById("registrieren");
    registerButton.addEventListener("click", handleClickButtonJetztRegistrieren);
    //Login
    async function handleClickButtonAnmelden(_event) {
        let formData = new FormData(document.forms[0]);
        freshUrl();
        let query = new URLSearchParams(formData);
        url = url + "/login" + "?" + query.toString();
        let userLogin = await fetch(url);
        let userLoginS = await userLogin.text();
        if (userLoginS == "true") {
            let username = document.getElementById("username").value;
            localStorage.clear();
            localStorage.setItem("username", username); //Usernamen im LocalStorage speichern
            window.location.href = "allerezepte.html";
        }
        else
            alert("Ihre eingegebenen Daten sind nicht korrekt");
    }
    async function handleClickButtonJetztRegistrieren(_event) {
        //neuen Nutzer in Datenbank einfügen
        let formData = new FormData(document.forms[0]);
        freshUrl();
        let query = new URLSearchParams(formData);
        url = url + "/createAccount" + "?" + query.toString();
        let userReg = await fetch(url);
        let userRegS = await userReg.text();
        if (userRegS == "true") {
            alert("Sie haben sich erfolgreich registriert");
        }
        else
            alert("Der gewählte Nutzername ist leider schon vergeben");
    }
})(Semesterabgabe || (Semesterabgabe = {}));
//# sourceMappingURL=login.js.map