/***** Funktionen 01 *****/


// 1. Kapselung von Codeblöcken

// Funktionsaufruf | call
// test();


// // Funktionsrumpf 
// // Funktionsdeklaration
// function test()
// {
//     console.log("Hallo, Benjamin");
// }

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

//ausgabeNamen();

// function ausgabeNamen() {
//     // interne Variable | What happens in functions stays at function
//     let firstName = "Maria";
//     console.log("Hallo, " + firstName +"!");
    
// }


//console.log(firstname); // Fehler : scope (Geltungsbereich)


/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN
// ausgabeNamen2("Maria");             //Argument 
// ausgabeNamen2("Nadim");
// ausgabeNamen2("Melanie"); 


// function ausgabeNamen2(firstName)   // Parameter
// { 
//     console.log("Hallo, " + firstName +"!");
// }


/***** Funktion 02c ****/
// 2c. Mehrere Parameter / Argument


const prompt = require('prompt-sync')({sigint: true});

ausgabeNamenParams(prompt("Bitte Namen eingeben: "), prompt("Bitte Nachnamen eingeben: ")); //Piping


function ausgabeNamenParams(firstName, famailyName)   // Parameter
{ 
    console.log("Hallo, " + firstName + " " + famailyName + "!");

}