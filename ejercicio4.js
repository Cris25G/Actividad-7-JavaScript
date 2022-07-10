'use strict' //Modo estricto de JavaScript

var a;
var b;


 a = parseInt(prompt("Ingrese un numero"));
 b = parseInt(prompt("Ingrese un numero mayor al primero"));

 for (var i = a; i < b; i++){
    if (i % 2 != 0)
    document.write("<br>"+ i)
 }