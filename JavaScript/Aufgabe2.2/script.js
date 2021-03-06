"use strict";
//Aufgabe1a)
function min(...numbers) {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (min > numbers[i]) {
            min = numbers[i];
        }
    }
    return min;
}
console.log("Minimum: " + min(3, 4, 5, 6, 2, 12, 3));
//Aufgabe1 b)
function isEven(num) {
    while (num >= 0) {
        if (num == 0) {
            return true; //Zahl ist gerade
        }
        if (num == 1) {
            return false; //Zahl ist ungerade
        }
        num = num - 2;
    }
    console.log("Keine Lösung gefunden");
    return false;
}
let num1 = 50;
let num2 = 75;
console.log(num1 + " " + isEven(num1));
console.log(num2 + " " + isEven(num2));
/*let zahl3 = -1;

console.log(zahl3 + " " + isEven(zahl3));
-> da -1 nich größer gleich 0 ist, wird die while schleife für -1 nicht durchlaufen und somit erhalten wir die information, dass keine Lösung gefunden wurde (auf der Kosnsole).
*/
//Aufgabe1c)
//1. Interface /5. Klasse mit Konstruktor und showInfo
class Student {
    constructor(_name, _alter, _semester) {
        this.name = _name;
        this.alter = _alter;
        this.semester = _semester;
    }
    showInfo() {
        console.log(this.name);
        console.log("Alter: " + this.alter);
        console.log(this.semester + ". Semester");
    }
}
//2. 3 Studenten anlegen
let s1 = new Student("Mia Müller", 19, 1);
let s2 = new Student("Noah Günter", 25, 3);
let s3 = new Student("Emre Bak", 22, 2);
//3. Array mit Studenten anlegen 
let students = [s1, s2, s3];
//weiteren Student dem Array hinzufügen
students.push(new Student("Manny Froh", 27, 6));
//4. Informationen
for (let i = 0; i < students.length; i++) {
    students[i].showInfo();
}
//Aufgabe 2a)
function backwards(array1) {
    let array2 = [];
    let loopIndex = 0;
    for (let i = array1.length - 1; i >= 0; i--) {
        array2[loopIndex] = array1[i];
        loopIndex++;
    }
    return array2;
}
let array1 = [5, 4, 3, 2, 1];
console.log(backwards(array1));
//b)
function join(array3, array4) {
    let geb = [];
    for (let i = 0; i < array3.length; i++) { //array3 wird mit .push an geb angehangen
        geb.push(array3[i]);
    }
    for (let i = 0; i < array4.length; i++) {
        geb.push(array4[i]);
    }
    return geb;
}
let array3 = [2, 4, 0, 8];
let array4 = [2, 0, 0, 1];
console.log(join(array3, array4));
//c)
function split(array6, zahl4, zahl3) {
    let agesamt = [];
    if (zahl4 > zahl3) {
        let zahl5 = 0;
        zahl5 = zahl4;
        zahl4 = zahl3;
        zahl3 = zahl5;
    }
    for (let i = zahl4; i < zahl3 + 1; i++) {
        agesamt.push(array6[i]);
    }
    return agesamt;
}
let array6 = [4, 5, 4, 3, 2, 6, 8, 9];
console.log(split(array6, 1, 4)); //Ausgabe von Stelle 1-4 des Arrays (= 5 4 3 2)
//Aufgabe3 a)
let canvas = document.getElementById("myFirstCanvas");
let context = canvas.getContext("2d");
context.lineWidth = 10;
//Wiese
context.fillStyle = "Green";
context.fillRect(0, 250, 500, 200);
//Himmel
context.fillStyle = "LightBlue";
context.fillRect(0, 0, 500, 250);
//Sonne
context.beginPath();
context.fillStyle = "Yellow";
context.arc(460, 40, 60, 0, 360, false);
context.fill();
//Wolke1
context.beginPath();
context.fillStyle = "White";
context.arc(240, 50, 45, 0, 360, false);
context.fill();
//Wolke2
context.beginPath();
context.fillStyle = "White";
context.arc(280, 50, 37, 0, 360, false);
context.fill();
//Baum1
context.beginPath();
context.fillStyle = "Green";
context.arc(420, 190, 25, 0, 360, false);
context.fill();
context.beginPath();
context.fillStyle = "Brown";
context.fillRect(415, 210, 10, 40);
context.fill();
//Baum2
context.beginPath();
context.fillStyle = "Green";
context.arc(370, 190, 25, 0, 360, false);
context.fill();
context.beginPath();
context.fillStyle = "Black";
context.fillRect(365, 210, 10, 40);
context.fill();
//Haus
context.strokeRect(65, 140, 150, 110);
context.fillRect(120, 190, 40, 60);
context.beginPath();
context.moveTo(40, 140);
context.lineTo(140, 60);
context.lineTo(240, 140);
context.closePath();
context.stroke();
/*//c) Funktion, die ein befülltes Rechteck zurück gibt
function createRect(): Rechteck {
    let rechteck1: Rechteck = { x: Math.random() * 500, y: Math.random() * 500, z: Math.random() * 100, a: Math.random() * 100 };
    return rechteck1;
}
//d) Rechtecke auf Canvas abbilden
function drawRect(rechteck1: Rechteck): void {
    context.beginPath();
    context.fillRect(rechteck1.x, rechteck1.y, rechteck1.z, rechteck1.a);
}
//e) Rechtecke in Array anlegen & ausführen
let recht: Rechteck[] = [];
recht.push(createRect());
recht.push(createRect());
recht.push(createRect());

for (let i: number = 0; i < recht.length; i++) {
    drawRect(recht[i]);
}*/ 
//# sourceMappingURL=script.js.map