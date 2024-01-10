
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});

let ersteZahl = Number(prompt("Erste Zahl? "));
let zweiteZahl = Number(prompt("Zweite Zahl?: "));
let summe       = ersteZahl + zweiteZahl
console.log(summe)
