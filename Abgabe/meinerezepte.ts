namespace Semesterabgabe {

    //Allgemeine url
    let url: string;

    function freshUrl(): void {
        url = "https://gissose2021omb.herokuapp.com"
        //url = "http://localhost:8100";
    }


    //Buttons
    let bearbeiten: HTMLButtonElement = <HTMLButtonElement>document.getElementById("edit");
    bearbeiten.addEventListener("click", handleClickEdit);

    let löschen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("delete");
    löschen.addEventListener("click", handleClickDelete);

    let erstellen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("create");
    erstellen.addEventListener("click", handleClickSubmit);


    async function handleClickSubmit(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        console.log("Formulardaten " + formData);
        
        freshUrl();
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/erstellen" + "?" + query.toString();
        console.log(url);

        let submit: Response = await fetch(url);
        let submitS: string = await submit.text();

        let data: HTMLElement = <HTMLElement>document.getElementById("server");
        data.innerHTML = submitS;
    
        await fetch(url);

    }

    async function handleClickEdit(): Promise<void> {

    }

    async function handleClickDelete(): Promise<void> {

    }

}