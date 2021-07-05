let loginForm: HTMLFormElement = <HTMLFormElement>document.getElementById("login");
let createAccountForm: HTMLFormElement = <HTMLFormElement>document.getElementById("createAccount");

document.querySelector("#linkCreateAccount").addEventListener("click", handleClickCreateAccount);

function handleClickCreateAccount(): void {
    loginForm.classList.add("form--hidden");
    createAccountForm.classList.remove("form--hidden");
}

document.querySelector("#linkLogin").addEventListener("click", handleClickLogin);

function handleClickLogin(): void {
    loginForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");
}

