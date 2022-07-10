'use strict' //Modo estricto de JavaScript

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("Introduce numeros hasta que uno de los numeros sea negativo"));
    
    if(isNaN(numero)) {
        numero = 0;
    }
  //Mientras se introduzcan numeros mayores o iguales a 0 se suman
    else if(numero >= 0) {
        suma = suma + numero;
      
        //Suma la cantidad de numeros ingresados
          contador++;
    }
    
} while(numero >= 0)//Repite la suma mientras los numeros sean mayores o iguales a 0

//Imprime la suma y la media en pantalla
document.write("La suma de todos los numeros ingresados es: "+suma+"<br>");
document.write("La media de todos los numeros es: "+(suma/contador)+"<br>"); //Se divide la suma con la cantidad de numeros
