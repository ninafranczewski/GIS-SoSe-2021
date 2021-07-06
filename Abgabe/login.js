"use strict";
let url;
function freshUrl() {
    url = "https://gissose2021omb.herokuapp.com";
    //url = "http://localhost:8100";
}
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
/*document.getElementById("anmelden").addEventListener("click", handleClickButtonAnmelden);
document.getElementById("registrieren").addEventListener("click", handleClickButtonJetztRegistrieren);
*/
let buttonLogin = document.getElementById("anmelden");
buttonLogin.addEventListener("click", handleClickButtonAnmelden);
async function handleClickButtonAnmelden() {
    //Nutzer in Datenbank angelegt?
    freshUrl();
    let formData = new FormData(document.forms[0]);
    let query = new URLSearchParams(formData);
    //query an die Url anhängen
    url = url + "/login" + "?" + query.toString();
    let response = await fetch(url);
    let message = await response.text();
    let answer = document.getElementById("serverResponse");
    answer.innerHTML = message;
    console.log(message);
    document.getElementById("serverResponse").innerHTML = message;
}
async function handleClickButtonJetztRegistrieren() {
    //neuen Nutzer in Datenbank einfügen
}
//# sourceMappingURL=login.js.map