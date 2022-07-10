'use strict' //Modo estricto de JavaScript

var NUM_1 = 0;
var i;
var divisores;
var conc = "";


NUM_1 = parseInt(prompt("Ingrese un número", "Escriba Aqui"));

for (i = 1; i <= NUM_1; i++) {
    if (NUM_1 % i == 0) conc = conc + "" + i;
}

document.write("los divisores del numero " + NUM_1 + " son: " + conc + ".");



