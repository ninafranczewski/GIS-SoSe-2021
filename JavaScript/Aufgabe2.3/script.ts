//Aufgabe 1
document.querySelector("#RechteckHinzufügen").addEventListener("click", RechtHinzu);
document.querySelector("#FeldZurücksetzen").addEventListener("click", reset);

interface Erstellen {
    sizeX: number;
    sizeY: number;
}
function createRect(): Erstellen {
    //Rechteck
    let rechteck1: Erstellen = {sizeX: Math.random() * 100, sizeY: Math.random() * 100 };
    return rechteck1;
} 
function drawRect(rechteck1: Erstellen): void {
    let rechteck: HTMLElement = document.getElementById("rechteck");
    let div: HTMLDivElement = document.createElement("div");

    let transform: string = "translate(" + Math.random() * 500 + "px," + Math.random() * 300 + "px)";
    //Farbe
    let color: string = "rgb(" + Math.random() * 255 + " ," + Math.random() * 255 + " ," + Math.random() * 255 + ")";
    //Style
    div.style.width = (rechteck1.sizeX) + "px";
    div.style.height = (rechteck1.sizeY) + "px";
    div.style.backgroundColor = color;
    div.style.position = ("fixed");
    //Position des Rechtecks verändern
    div.style.transform = transform;
    //Rechteck dem Eltern-Div unterordnen
    rechteck.appendChild(div);
}

let rectangles: Erstellen[] = [];

//neue Rechtecke
function RechtHinzu(): void {
    rectangles.push(createRect());
    reloadArea();
    for (let i: number = 0; i < rectangles.length; i++) {
        drawRect(rectangles[i]);
    }
}
//Rechtecke auf 0 setzen und Seite "löschen"
function reset(): void {
    reloadArea();
    rectangles.length = 0;
} 
//das erste Kind des "Parents" entfernen
function reloadArea(): void {
    let rechteck: HTMLElement = document.getElementById("rechteck");
    while (rechteck.firstChild) {
        rechteck.removeChild(rechteck.firstChild);
    }
}

//Kapitelaufgabe
class Pflanze{
    art: string;
    topffarbe: string;
    größe: number;
    farbe: string;

    constructor(_art: string, _topffarbe: string, _größe: number, _farbe: string){
        this.art = _art;
        this.topffarbe = _topffarbe;
        this.größe = _größe;
        this.farbe = _farbe;
    }
} 
let array: Pflanze [] = [];

