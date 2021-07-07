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
        //url = "https://gissose2021omb.herokuapp.com"
        url = "http://localhost:8100";
    }

    //Buttons
    let loginButton: HTMLButtonElement = <HTMLButtonElement> <unknown>document.getElementById("anmelden");
    loginButton.addEventListener("click", handleClickButtonAnmelden);

    let registerButton: HTMLButtonElement = <HTMLButtonElement> <unknown>document.getElementById("registrieren");
    registerButton.addEventListener("click", handleClickButtonJetztRegistrieren);

    //Login
    async function handleClickButtonAnmelden(_event: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        console.log("Formulardaten " + formData);
        
        freshUrl();
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/login" + "?" + query.toString();
        console.log(url);
        
        let userLogin: Response = await fetch(url);
        let userLoginS: string =  await userLogin.text();

        if (userLoginS == "true") {
            let username: string = (<HTMLInputElement><unknown>document.getElementById("username")).value; 
            localStorage.clear();
            localStorage.setItem("username", username); //User speichern
            window.location.href = "allerezepte.html";
        }
        else 
            alert("Ihre eingegebenen Daten sind nicht korrekt");
    }


    async function handleClickButtonJetztRegistrieren(_event: Event): Promise<void> {
        //neuen Nutzer in Datenbank anlegen
        let formData: FormData = new FormData(document.forms[1]);
        console.log("Formulardaten " + formData);

        freshUrl();
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/createAccount" + "?" + query.toString();
        console.log(url);
        
        let userReg: Response = await fetch(url);
        let userRegS: string =  await userReg.text();

        if (userRegS == "true") {
            alert ("Sie haben sich erfolgreich registriert")
        }
        else 
            alert ("Der gewählte Nutzername ist leider schon vergeben")
    }
}