/* Crear programa FizzBuzz
Puedes crear una variable para guardar un número y otra variable para guardar un string.
Tendremos un número y tenemos que imprimir contando hasta ese número.
Los múltiplos de 3 se reemplazan con "Fizz",
Los múltiplos de 5 con "Buzz"
Los múltiplos de ambos con "FizzBuzz". */

for  (i = 1; i <= 100; i ++ ){
  if (i % 3 == 0 && i % 5 == 0){
  console.log("FizzBuzz");
  } if (i % 3 == 0 ){
    console.log("Fizz");
  } if (i % 5 == 0){
    console.log("Buzz");
  } else 
  console.log(i);

} 