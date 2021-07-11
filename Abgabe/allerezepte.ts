namespace Semesterabgabe {
    
    //Allgemeine url
    let url: string;

    function freshUrl(): void {
        url = "https://gissose2021omb.herokuapp.com"
        //url = "http://localhost:8100";
    }

    //Button zum favorisieren
    async function handleClickIcon(rezeptBesitzer: String, rezeptName: String): Promise<void> {
        freshUrl();
        let username = localStorage.getItem("username")
        url = url + "/fav" + "?username=" + username + "&rezeptBesitzer=" + rezeptBesitzer + "&rezept=" + rezeptName;
        console.log(url);
        await fetch(url);
        console.log(url);
        
    }

    //Rezepte  anzeigen
    async function recipes(): Promise<void> {
        freshUrl();
        url = url + "/holeRezepte" + "?";
        console.log(url);
        let result: Response = await fetch(url);
        let output: string = await result.text();

        let objekt = JSON.parse(output)
        let rezept: HTMLElement = <HTMLElement>document.getElementById("recipeContainer");
        console.log(objekt);

        for (let rezeptEintrag of objekt) {

            let blogPost = document.createElement("div");
            rezept.appendChild(blogPost);

            let blogPostInfo = document.createElement("div");
            blogPost.appendChild(blogPostInfo);

            let blogPostInfoIcon = document.createElement("div");
            blogPostInfo.appendChild(blogPostInfoIcon);

            let blogPostInfoIconImg = document.createElement("img");
            blogPostInfoIconImg.addEventListener("click", () => handleClickIcon(rezeptEintrag.user, rezeptEintrag.titel));
            //für jedes icon wird eine anonyme Funktion erstellt, welche die handleClick für das aktuell ausgewählte Rezept ausführt (hier: favorit hinzufügen)

            blogPostInfoIconImg.src= "img/icon.png" 
            blogPostInfoIconImg.alt= "heart-icon"
            blogPostInfoIcon.appendChild(blogPostInfoIconImg);
            


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
                        zutatenliste += " " + value; //damit values getrennt sind -> " "
                    }

                }
            }
            zutaten1.textContent = zutatenliste.trim(); //entfernt alle Leerzeichen vor und nach dem String -> schönere Formatierung
            blogPostInfo.appendChild(zutaten1);

            let zubereitung = document.createElement("h2");
            zubereitung.textContent = "Zubereitung";
            blogPostInfo.appendChild(zubereitung);

            let zubereitungText = document.createElement("p");
            zubereitungText.textContent = rezeptEintrag["zubereitung"];
            blogPostInfo.appendChild(zubereitungText);

        }
    }

    recipes();

}