namespace Semesterabgabe {

    //Zwischen Login- und CreateAccount-Formular wechseln
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

    //Allgemeine url
    let url: string;

    function freshUrl(): void {
        url = "https://gissose2021omb.herokuapp.com"
        //url = "http://localhost:8100";
    }

    //Buttons
    document.getElementById("anmelden").addEventListener("click", handleClickButtonAnmelden);
    document.getElementById("registrieren").addEventListener("click", handleClickButtonJetztRegistrieren);

    async function handleClickButtonAnmelden(): Promise<void> {
        //Nutzer in Datenbank angelegt?
        freshUrl();
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        //query an die Url anhängen
        url = url + "/login" + "?" + query.toString();
        await fetch(url);
    }


    async function handleClickButtonJetztRegistrieren(): Promise<void> {
        //neuen Nutzer in Datenbank einfügen
        freshUrl();
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        //query an die Url anhängen
        url = url + "/login" + "?" + query.toString();
        await fetch(url);
    }
}