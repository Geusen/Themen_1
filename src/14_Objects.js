/***** Erinnerung: Arrays *******/

let arr;
arr = ["Ich","bin","Max"];
output(arr);
output(arr[0]);
output("------------");

// // nested arrays - Prinzip: [[[]]]
// // nested arrays  - hier: [[],[]]
arr =   [
                ["Ich","bin","Max"],
                ["Ich","bin","Moritz"]
        ];
 
        
output(arr);


output(arr[0]);
output(arr[0][0]+ " " + arr[1][2]);
output(arr[1][0]);
output("------------");







// Modul: Ausgabe | Test
//output("hi");
function output(outputData) {
    console.log(outputData);
}