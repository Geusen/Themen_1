
/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 * 
 */

/***** 02 Theorie: Array */
// let arr;
// //arr = new Array();        // Konstruktor
// arr = [];                   // Literal
// arr =[2, 11, 7, 8 ,10];
// //arr =[2,11];

// output(arr);
// output(arr.length);         // Anzahl der Elemente
// output(arr[0]);             // Index 0 (1. Pos. im Array)
// output(arr[arr.length-1]);  // letzte Pos. / allgemein           

/* 02a. Theorie: Schleifen (for-schleife) */
/* For -Schleifen als allg. Wiederholungs-Struktur */

// Inkrement (untere Grenze --> obere Grenze)
// for (let i = 0; i < 5; i++) 
// {
//     output(i);
// }

// Dekrement (obere Grenze --> untere Grenze)
// for (let i = 10; i > 0; i--) 
// {
//     output(i);
// }

// Inkrement (var. Schrittweite)

// for (let i = 10; i <= 100; i += 5) 
// {
//     output(i);
// }



/* 02b. For-Schleife für Array-Index (Iteration)*/

// let arr = ["Ich","bin","die","coole","Maxine","Mützerich"]
// for (let i = 0; i < arr.length; i++) 
// {
//     //output(i);        //Outputtest index der for Schleife
//     output(arr[i]);
// }


/********* Überlegungen - Transponierung **********/
 
/*

1. Einer Variablen kann Ihr eigener Wert zugewiesen werden.

Solange die Variable existiert, bleibt dieser erhalten.

hier: Aufsummierung

*/

/* Zu "Fuß" - DRY !!! */
//  let a = 0; // Anfangswert
//  output("inhalt von a: " + a);
//  a = a + 1; // a = 0 + 1
//  output("inhalt von a: " + a);
//  a = a + 1; // a = 1 + 1
//  output("inhalt von a: " + a);
//  a = a + 1; // a = 2 + 1
//  output("inhalt von a: " + a);

 
 /* Besser: mit FOR-Schleife */
let a = 0;
 for (let i = 0; i < 10; i++) {
    a += 1;
    output("inhalt von a: " +a);
 }


/**
 *   PRAXIS
 * 
 */

/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
//output(getSentence("Ich","bin","Max","Mütze"));
//output(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));
function getSentence(word1,word2,word3,word4,word5,word6) {
    const GAP = " ";
    const PUNCT = ".";
    let str =   word1 + GAP +
                word2 + GAP +
                word3 + GAP +
                word4 + GAP +
                word5 + GAP +
                word6 +
                PUNCT;

    return str;
}




/*** 01a. Funktionalität mit Array 1 */
// Kritik | Überlegung
// word1,word2, .... wordN :: Semantische Struktur
// arr[0],arr[1] ... arr[n-1] :: Numerische Struktur (0,1,2,3 ... n)
// --> Transformation semantisches Problem --> numerisches Problem
// output(getSentenceArr(["Ich","bin","die","coole","Maxine","Mützerich"]));
// function getSentenceArr(arr) {
//     for (let i = 0; i < 5; i++) 
//     const GAP = " ";
//     const PUNCT = ".";
//     let str =   arr[0] + GAP +
//                 arr[1] + GAP +
//                 arr[2] + GAP +
//                 arr[3] + GAP +
//                 arr[4] + GAP +
//                 arr[5] + 
//                 PUNCT;
 
//     return str;
//     r
// }

/*** 01b. Funktionalität mit Array 2  */
// Transponierung:  untereinander ---> nebeneinander
// Helge Schneider: Anananandereihung ...

// output(getSentenceArr2(["Ich","bin","die","coole","Maxine","Mützerich"]));
function getSentenceArr2(arr) {
    const GAP = " ";
    const PUNCT = ".";
    let str ;   
    
    for (let i = 0; i < arr.length; i++) 
    {
    
    output(arr[i]);
    }
    return str;
    
}

// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


