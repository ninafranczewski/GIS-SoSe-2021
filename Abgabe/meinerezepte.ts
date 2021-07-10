namespace Semesterabgabe {

    //Allgemeine url
    let url: string;

    function freshUrl(): void {
        url = "https://gissose2021omb.herokuapp.com"
        //url = "http://localhost:8100";
    }


    //Button
    let erstellen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submit");
    erstellen.addEventListener("click", handleClickSubmit);


    async function handleClickSubmit(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        console.log("Formulardaten " + formData);

        freshUrl();
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let username = localStorage.getItem("username")
        url = url + "/erstellen" + "?" + query.toString() + "&username=" + username;
        console.log(url);

        let submit: Response = await fetch(url);
        let submitS: string = await submit.text();

        let data: HTMLElement = <HTMLElement>document.getElementById("server");
        data.innerHTML = submitS;


        loadRecipe();

    }



    async function loadRecipe(): Promise<void> {
        freshUrl();
        let username = localStorage.getItem("username")
        url = url + "/holeRezept" + "?username=" + username;
        console.log(url);
        let result: Response = await fetch(url);
        let output: string = await result.text();

        let objekt = JSON.parse(output)
        let rezept: HTMLElement = <HTMLElement>document.getElementById("neuesRezept");

        rezept.innerHTML = "";
        console.log(objekt);

        for (let rezeptEintrag of objekt) {

            let blogPost = document.createElement("div");
            rezept.appendChild(blogPost);

            let blogPostInfo = document.createElement("div");
            blogPost.appendChild(blogPostInfo);


            let rezeptTitel = document.createElement("h1");
            rezeptTitel.textContent = rezeptEintrag["titel"];
            blogPostInfo.appendChild(rezeptTitel);

            let zutaten = document.createElement("h2");
            zutaten.textContent = "Zutaten";
            blogPostInfo.appendChild(zutaten);

            let zutaten1 = document.createElement("p");
            let zutatenliste: string = ""
            for (let key of Object.keys(rezeptEintrag)) {
                if (key.includes("zutat")) {
                    let value = rezeptEintrag[key];
                    if (value !== "") {
                        zutatenliste += " " + value;
                    }

                }
            }
            zutaten1.textContent = zutatenliste.trim(); //entfernt alle Leerzeichen vor und nach dem String
            blogPostInfo.appendChild(zutaten1);

            let zubereitung = document.createElement("h2");
            zubereitung.textContent = "Zubereitung";
            blogPostInfo.appendChild(zubereitung);

            let zubereitungText = document.createElement("p");
            zubereitungText.textContent = rezeptEintrag["zubereitung"];
            blogPostInfo.appendChild(zubereitungText);

            let deleteRecipe = document.createElement("button");
            deleteRecipe.addEventListener("click", () => handleClickDelete(rezeptEintrag["titel"]));
        }
    }

    async function handleClickDelete(rezeptName: string): Promise<void> {
        freshUrl();
        let username = localStorage.getItem("username")
        url = url + "/löscheRezept" + "?username=" + username + "&rezeptName=" + rezeptName;
        console.log(url);
        await fetch(url);
        loadRecipe();
    }

    loadRecipe();

}