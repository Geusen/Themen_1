
/* Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 2000;
const birthYearMark = 2001;

// Berechnung Alter
let date = new Date(); // Systemfunktion Datum
let year = date.getFullYear(); // Daten liefern lassen!!
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);


// Deklaration
let isJohnOlder // Is John older? --> y/n ---> true / false
isJohnOlder = (ageJohn > ageMark);  // Test
isJohnEqual = (ageJohn == ageMark);
console.log("isJohnOlder " + isJohnOlder);
console.log("isJohnEqual" + isJohnEqual);

