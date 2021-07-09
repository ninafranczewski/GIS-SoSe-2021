namespace Semesterabgabe {

    document.querySelector(".icon").addEventListener("click", handleClickIcon);

    function handleClickIcon(): void {

    }

    //Allgemeine url
    let url: string;

    function freshUrl(): void {
        url = "https://gissose2021omb.herokuapp.com"
        //url = "http://localhost:8100";
    }


    async function recipes (): Promise<void> {
        freshUrl();
        url = url + "/holeRezepte" + "?";
        console.log(url);
        let result: Response = await fetch(url);
        let output: string = await result.text();

        let objekt = JSON.parse(output)
        let rezept: HTMLElement = <HTMLElement>document.getElementById("neuesRezept");

        let rezeptTitel = document.createElement("h1");
        rezeptTitel.textContent = objekt["titel"];
        rezept.appendChild(rezeptTitel);

        let zutaten = document.createElement("h2");
        zutaten.textContent = "Zutaten";
        rezept.appendChild(zutaten);

        let zutaten1 = document.createElement("p");
        let zutatenliste: string = ""
        for (let key of Object.keys(objekt)) {
            if (key.includes("zutat")) {
                let value = objekt[key];
                if (value !== "") {
                    zutatenliste += " " + value;
                }

            }
        }
        zutaten1.textContent = zutatenliste.trim(); //entfernt alle Leerzeichen vor und nach dem String
        rezept.appendChild(zutaten1);

        let zubereitung = document.createElement("h2");
        zubereitung.textContent = "Zubereitung";
        rezept.appendChild(zubereitung);

        let zubereitungText = document.createElement("p");
        zubereitungText.textContent = objekt["zubereitung"];
        rezept.appendChild(zubereitungText);

    }

    recipes();
}