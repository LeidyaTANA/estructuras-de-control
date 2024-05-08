/*Determinar si un año es bisiesto

Descripción: Desarrolla un programa que solicite al usuario un año y
determine si ese año es bisiesto o no. Un año es bisiesto si es divisible por
4, pero no si es divisible por 100 a menos que también sea divisible por
400. */

let año = parseInt (prompt("Ingresa un año"));

if (año %4 === 0){
    console.log("El año es bisiesto");
} else if (año %100 !== 0){
    console.log("El año no es bisiesto");
} else if (año %400 === 0){
    console.log("El año es bisiesto");
} 
