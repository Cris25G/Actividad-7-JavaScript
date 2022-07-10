'use strict' //Modo estricto de JavaScript


var num = parseInt(prompt("Ingresa un numero"));

while(isNaN(num) || num < 0){
    alert("ERROR!! Ingrese un valor correcto");
    num = parseInt(prompt("Ingresa el primer número"));
    }

if (num % 2 == 0) {
    alert("Es Par")    
}
if (num % 2 == 1) {
    alert("Es Impar")
}
alert("Espero Haberte Ayudado")
