let opera = prompt ("Que operacion deseas realizar suma +, resta -, multiplicacion *, division /");
let nom1 = parseFloat (prompt("Ingresa el primero numero"));
let nom2 = parseFloat (prompt("Ingresa el segundo numero"));

let resul

if (opera === "+") {
     resul = nom1 + nom2
        console.log ("El total de la suma es:" + resul);
} else if (opera === "-"){
     resul = nom1 - nom2
    console.log ("El resultado de la resta es:" + resul);
} else if (opera == "*") {
     resul = nom1 * nom2 
    console.log ("La multiplicacion es:" +resul)
} if (nom2 !== 0) {
      resul = nom1 / nom2;
    } else {
        console.log("Error: No se puede dividir por cero");
        
    }



