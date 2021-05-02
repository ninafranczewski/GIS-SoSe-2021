//Aufgabe1a)
function min(...numbers: number[]) {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (min > numbers[i]) {
            min = numbers[i];
        }
    }
    return min;
}
console.log("Minimum: " + min(3,4,5,6,2,12,3));


//Aufgabe1 b)
function isEven(num: number): boolean {
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
let num1: number = 50;
let num2: number = 75;
console.log(num1 + " " + isEven(num1));
console.log(num2 + " " + isEven(num2));
/*let zahl3 = -1;
console.log(zahl3 + " " + isEven(zahl3));
-> da -1 nich größer gleich 0 ist, wird die while schleife für -1 nicht durchlaufen und somit erhalten wir die information, dass keine Lösung gefunden wurde (auf der Kosnsole).
*/


//Aufgabe1c)
//1. Interface /5. Klasse mit Konstruktor und showInfo
class Student {
    name: string;
    alter: number;
    semester: number;

    constructor(_name: string, _alter: number, _semester: number) {
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
function backwards(array1: number[]): number[] {
    let array2: number[] = [];
    let loopIndex: number = 0;
    for (let i: number = array1.length - 1; i >= 0; i--) {
        array2[loopIndex] = array1[i];
        loopIndex++;
    }
    return array2;
}

let array1: number[] = [5,4,3,2,1];
console.log(backwards(array1));

//b)
function join(array3: number [], array4: number []) {
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
function split(array6: number [], zahl4: number, zahl3: number){
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
let array6 = [4,5,4,3,2,6];
console.log(split(array6, 1, 4)); //Ausgabe von Stelle 1-4 des Arrays (= 5 4 3 2)

//Aufgabe3 a)

let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myFirstCanvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");
context.lineWidth = 10;

//Himmel
context.fillStyle = "LightBlue";
context.fillRect(0, 0, 500, 300);
//Boden
context.fillStyle = "Green";
context.fillRect(0, 250, 500, 220);
//Sonne
context.beginPath();
context.fillStyle = "Yellow";
context.arc(40, 40, 60, 0, 360, false);
context.fill();
//Wolke
context.beginPath();
context.fillStyle = "White";
context.arc(300, 50, 45, 0, 360, false);
context.fill();
//Wolke2
context.beginPath();
context.fillStyle = "White";
context.arc(340, 50, 37, 0, 360, false);
context.fill();
//Baum
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
context.strokeRect(75, 140, 150, 110);
context.fillRect(130, 190, 40, 60,);
context.beginPath();
context.moveTo(50, 140);
context.lineTo(150, 60);
context.lineTo(250, 140);
context.closePath();
context.stroke();

//b) Interface, das beliebiges Rechteck abbilden kann
interface Rechteck {
    posX: number;
    posY: number;
    sizeX: number;
    sizeY: number;
}

//c) Funktion, die ein befülltes Rechteck zurück gibt
function createRect(): Rechteck {
    let rechteck1: Rechteck = { posX: Math.random() * 400, posY: Math.random() * 400, sizeX: Math.random() * 100, sizeY: Math.random() * 100 };
    return rechteck1;
}
//d) Rechtecke auf Canvas abgebildet
function drawRect(rechteck1: Rechteck): void {
    context.beginPath();
    context.fillRect(rechteck1.posX += 10, rechteck1.posY, rechteck1.sizeX, rechteck1.sizeY);
    context.fill();
}
//e) Rechtecke in Array anlegen
let rectangles: Rechteck[] = [];
rectangles.push(createRect());
rectangles.push(createRect());
rectangles.push(createRect());
rectangles.push(createRect());
rectangles.push(createRect());

for (let i: number = 0; i < rectangles.length; i++) {
    drawRect(rectangles[i]);
}