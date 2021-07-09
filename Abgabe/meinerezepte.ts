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

    let erstellen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submit");
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
        loadRecipe(query.get("titel"));

    }

    async function loadRecipe (nameRezept: string): Promise<void> {
        freshUrl();
        url = url + "/holeRezept" + "?titel=" + nameRezept;
        console.log(url);
        let result: Response = await fetch(url);
        console.log(result);
        let rezept: HTMLElement = <HTMLElement>document.getElementById("neuesRezept");
        /*<h1 class="blog-post__title">Apfelkuchen</h1>
                <h2 class="blog-post__text">Zutaten</h2>
                <p class="blog-post__text">
                    100g Mehl | 20g Zucker | 50g Butter
                </p>
                <h2 class="blog-post__text">Zubereitung</h2>
                <p class="blog-post__text">
                    alles verrühren
                </p>*/
        
        let rezeptTitel = document.createElement("h1");
        rezeptTitel.textContent = nameRezept;
        rezept.appendChild(rezeptTitel);

        let zutaten = document.createElement("h2");
        zutaten.textContent = "Zutaten";
        rezept.appendChild(zutaten);

        let zutaten1 = document.createElement("p");
        //zutaten1.textContent = ;
        rezept.appendChild(zutaten1);
    }

    async function handleClickEdit(): Promise<void> {

    }

    async function handleClickDelete(): Promise<void> {

    }

}