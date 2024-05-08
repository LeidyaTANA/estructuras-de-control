//Calcula la edad promedio

for ( i = 1; i <= 5; i ++ ){
    let numero = parseInt(prompt("Ingresa la edad de la persona" + i))
    if (numero > 0) {
        let suma_Edades = suma_Edades + numero
    } else {
        console.log("La edad que ingresas no es valida");
    }
}
let promedio_edad = suma_Edades / 5;
console.log("La edad promedio es: " + promedio_edad);
if (promedio_edad >= 18){
    console.log("La edad promedio es mayor o igual a 18 años");
} else {
    console.log("la edad promedio es menor a 18 años");
}
