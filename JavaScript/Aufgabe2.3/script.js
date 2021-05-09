"use strict";
//Aufgabe 1
document.querySelector("#RechteckHinzufügen").addEventListener("click", RechtHinzu);
document.querySelector("#FeldZurücksetzen").addEventListener("click", reset);
function createRect() {
    //Rechteck
    let rechteck1 = { sizeX: Math.random() * 100, sizeY: Math.random() * 100 };
    return rechteck1;
}
function drawRect(rechteck1) {
    let rechteck = document.getElementById("rechteck");
    let div = document.createElement("div");
    let transform = "translate(" + Math.random() * 500 + "px," + Math.random() * 300 + "px)";
    //Farbe
    let color = "rgb(" + Math.random() * 255 + " ," + Math.random() * 255 + " ," + Math.random() * 255 + ")";
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
let rectangles = [];
//neue Rechtecke
function RechtHinzu() {
    rectangles.push(createRect());
    reloadArea();
    for (let i = 0; i < rectangles.length; i++) {
        drawRect(rectangles[i]);
    }
}
//Rechtecke auf 0 setzen und Seite "löschen"
function reset() {
    reloadArea();
    rectangles.length = 0;
}
//das erste Kind des "Parents" entfernen
function reloadArea() {
    let rechteck = document.getElementById("rechteck");
    while (rechteck.firstChild) {
        rechteck.removeChild(rechteck.firstChild);
    }
}
//Kapitelaufgabe
class Pflanze {
    constructor(_art, _topffarbe, _größe, _farbe) {
        this.art = _art;
        this.topffarbe = _topffarbe;
        this.größe = _größe;
        this.farbe = _farbe;
    }
}
let array = [];
//# sourceMappingURL=script.js.map