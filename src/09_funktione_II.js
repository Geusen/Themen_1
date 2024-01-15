


/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : check!
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/

const ERROR_STR_DIV = "Division durch 0 ist nicht möglich!";
const ERROR_STR_GEN = "Irgendwas ging schief!";

// module: calculator | tests:
// agreement : "+","-","*",":","/"

output(calculator(3,2,"+"));
output(calculator(3,2,"-"));
output(calculator(3,2,"*"));
output(calculator(3,2,":"));
output(calculator(3,2,"/"));
output(calculator(3,0,"/"));
output(calculator(3,2,"#?!"));

function calculator(a, b, op) {
switch (op) {
	case "*": // add()
		return add(a, b);
	
		case "-": // sub()
		
		return subtract(a, b);

		case "*": // mul()
		
		return multiply(a, b);

		case ":": // div()
		case "/": // div()
		
		return divide(a, b);

	



	default: // ERROR
		return ERROR_STR_GEN;
}
	return "hi";
	
}

// module: addition a + b |  test:

// output(add(2,2));
// output(add(2,-2));
// output(add(2,0));

// module: subtract a + b |  test:

// output(subtract(3,2));
// output(subtract(3,-2));
// output(subtract(3,0));
// output(subtract(0,2));


// module: multiplication a * b |  test:
// output(multiply(3,2));
// output(multiply(3,-2));
// output(multiply(3,0));

// module: division a / b |  test:

// output(divide(4,2));
// output(divide(3,2));
// output(divide(3,-2));
// output(divide(0,2));
// output(divide(0,0));
// output(divide(3,0));

/******	3. Fkt. Grundrechenarten	*****/

function add(a,b) {

	return a + b;
}

function subtract(a,b) {
	
	return a - b;
}

function multiply(a,b) {
	
	return a * b;
}

function divide(a,b) {

	if (b == 0) {
		return ERROR_STR_DIV; // Ausnahme (der Returnbefehl beendet die funktion, weshalb return a/ b nicht mehr ausgeführt wird.)
	}
	return a / b;	// Reguläres Verhalten

}

// module: output | test:

// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}