"use strict";
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
//# sourceMappingURL=login.js.map