'use strict' //Modo estricto de JavaScript


var n1 = parseInt(prompt("Escriba el primer número"));
var n2 = parseInt(prompt("Escriba el segundo número"));

while(isNaN(n1) || isNaN(n2) || n1 < 0 || n2 < 0){
    alert("Ingrese un valor correcto");
    n1 = parseInt(prompt("Escriba el primer número"));
    n2 = parseInt(prompt("Escriba el segundo número"));
    }

if (n1 > n2) {
alert("El Número Mayor es: "+ n1);
} else {
alert("El Número Mayor es: "+ n2);
}

if (n1 < n2) {
    alert("El Número Menor es: "+ n1)
} else{
    alert("El Número Menor es: "+ n2)
}

if (n1 == n2) {
    alert("Los dos números son Iguales")
} else{
    alert("Los dos números son Distintos")
}

