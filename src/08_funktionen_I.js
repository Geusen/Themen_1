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

function ausgabeNamen() {
    // interne Variable | What happens in functions stays at function
    let firstName = "Maria";
    console.log("Hallo, " + firstName +"!");
    
}


//console.log(firstname); // Fehler : scope (Geltungsbereich)


/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN
ausgabeNamen2("Maria");    //Argument
ausgabeNamen2("Nadim");
ausgabeNamen2("Melanie"); 


function ausgabeNamen2(firstName) {
    
    
    console.log("Hallo, " + firstName +"!");
}