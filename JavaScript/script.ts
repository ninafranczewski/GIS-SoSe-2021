//Aufgabe 1a) -> Als Variablenname kann z.B keine Zahl verwendet werden.

function a1(): void {
    let x: string = "Alles";
    console.log(x);
    func1();
    console.log("Logo!");
}

a1();

function func1(): void {
    console.log("Klar?");
}

//Aufgabe 1b) -> Dadurch das die Funktion "func1();" in Zeile 6 aufgerufen wird erscheint das Wort "Klar?" als zweitens auf der Konsole.

//Aufgabe 1c)

function a11(): void {
    let x: string = "Alles";
    console.log(x);
    func2();
    console.log(x);
    func3();
    console.log(x);
    console.log("Logo!");
}

a11();

function func2(): void {
    console.log("Gute!");
}

function func3(): void {
    console.log("Klar?");
}

//Aufgabe 2 -> Durch die Do-While-Schleife wird von dem Wert i (hier:9) immer eine Zahl abgezogen und in der Konsole ausgegeben. Dieser Vorgang wird bis zur Zahl 1 wiederholt da (i > 0).

function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while( i > 0);
}

a2();

//Aufgabe 3
//a) -> z.B Fehlermeldung "doppelte Fuktionsimplementierung" - Lösung durch den Hinweis einfach.

//Aufgabe 4

let x: string = "Hallo";
console.log(x);
func4(x);
console.log(x);
func5();
func6();
console.log(x);

function func4(y: string): void{
    y = "Bla";
    console.log(y);
}

function func5(): void{
    let x: string = "Blubb";
    console.log(x);
}

function func6(): void{
    x = "Test";
}

// a) Annahme: Hallo Bla Hallo Blubb Test Hallo
//    nach Prüfung: das letzte Hallo wird nicht ausgegeben.
// b) Globale Variablen: existieren im ganzen Code
//    Lokale Variablen: existeren nur innerhalb eines Blocks
//    “normale” Variablen (Zahlen und strings): haben einen Wert
//    Funktionen = Anweisungsblöcke, die im Code mit dem entsprechendem Name aufgerufen werden können


//Aufgabe 5
//a) zwei Zahlen als Parameter und als Rückgabewert das Ergebnis der Multiplikation der beiden Parameter
function multiply(): void{
    let x = 9;
    let y = 2;
    let z = x * y;
    console.log(z);
}
multiply();

//b) zwei Zahlen als Parameter und die größere der beiden zurück geben
function max(): void{
    let x = 9;
    let y = 2;
    if (x > y) {
        console.log(x);
    }

}
max();

//c) while Schleife alle Zahlen von 1 bis 100 zusammen
var n = 0;
var m = 0;
while (n < 100) {
  n++;
  m += n;
}
console.log(m);

//d) 10 zufällige Zahlen zwischen 0 und 100 auf der Konsole ausgeben
let zmax: number = 100;
let zRandom: number;
for (let l: number = 0; l <= 9; l++) {
    zRandom = Math.random() * zmax;
    console.log(zRandom);
}


//e) eine Zahl n entgegen nimmt und als Rückgabewert die Fakultät (1*2*3*...*n) dieser Zahl zurück gibt
function factorial(n: number): void {
    let e: number = 1;
    if (n < 1) {
    e = 1;
    console.log(e);
    }
    if (n > 1) {
    for (let i = 1; i <= n; i++) {
    e = e * i;
    }
    console.log(e);
    }
}
factorial(6);

//f)
function leapyears(): void {
    let jahr: number = 1900;
    while (jahr <= 2021) {
        if ((jahr % 4 == 0) && (jahr % 100 != 0) || (jahr % 400 == 0)) {
            console.log(jahr + " ist ein Schaltjahr");
        }
        jahr++;
    }
}
leapyears();


//Aufgabe 6
//a)
let hashtag: string = "";
for (let i: number = 0; i <= 6; i++) {
    hashtag += "#";
    console.log(hashtag);
}

//b) Zahlen von 1 bis 100 ausgeben -> Ist die Zahl durch 3 teilbar, geben Sie statt der Zahl Fizz aus. Ist sie durch 5 (und nicht durch 3) teilbar, geben sie Buzz aus
let h: number = 1;
while (h < 100) {
    if (h % 3 == 0) {
        console.log("Fizz");
        h++;
    }
    if (h % 5 == 0) {
        console.log("Buzz");
        h++;
    }
    else {
        console.log(h);
        h++;
    }
}

//c) "FizzBuzz" -> wenn die Zahl durch sowohl 3 als auch durch 5 teilbar ist
let k: number = 1;
while (k < 100) {
    if (k % 15 == 0) { 
        console.log("FizzBuzz");
        k++;
    }
    if (k % 3 == 0) {
        console.log("Fizz");
        k++;
    }
    if (k % 5 == 0) {
        console.log("Buzz");
        k++;
    }
    else {
        console.log(k);
        k++;
    }
}

//d) Funktion, welche einen String zurückgibt, der ein 8x8 Schachbrett repräsentiert, mit neuen Zeilen ("\n") um die Zeilen zu trennen. 
//   An jeder Position im Brett ist entweder ein # oder ein Leerzeichen.
let zeile: string = " ";
function schachbrett(): void {
    let zeilenZahl: number = 8;
    let spaltenZahl: number = 8 / 2;
    for (let i: number = 0; i < zeilenZahl; i++) {
        if (i % 2 == 0) {
            for (let m: number = 0; m < spaltenZahl; m++) {
                zeile += " " + "#";
            }
        }
        else {
            for (let m: number = 0; m < spaltenZahl; m++) {
                zeile += "#" + " ";
            }
        }
        console.log(zeile + "\n");
        zeile = " ";
    }
}
schachbrett();
