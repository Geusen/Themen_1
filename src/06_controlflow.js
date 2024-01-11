// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
const ageJohn = 34;
const ageMark = 34;

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);
console.log("------------------");



/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)


if (isJohnOlder) 

{
    
    console.log("John ist älter!");

}
if (isJohnEqual) {

    console.log("Die beiden sind gleich alt");
    
} 

else {
    

    console.log("John ist jünger!")


}