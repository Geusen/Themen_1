const prompt = require('prompt-sync')({sigint: true});

startApp();
function startApp() {
	output(calculator(getNum1(), getNum2(), getOp()));
}


function getNum1() {
	return parseInt(prompt("Zahl1?: "));
}

function getNum2() {
	return parseInt(prompt("Zahl2?: "));
}

function getOp() {
	return prompt("Summe oder Differenz?: ");
}

function calculator(a, b, op) {
	switch (op) {
		case "Summe": // add()
			return summe(a, b);
		case "Differenz": // sub()
			return differenz(a, b);
		default: // ERROR
			return ERROR_STR_GEN;
	}
}

function summe(a,b) {
	return a + b;
}

function differenz(a,b) {
	return a - b;
}


// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}