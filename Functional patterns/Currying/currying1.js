
// Currying transforma todas las funciones en unarias

// de esto ...
const suma = ( a , b ) => a + b
console.log(suma( 3 , 5 ));

// a esto ...
const sumaCurry = a => b => a + b

const suma1 = sumaCurry(4);

console.log(suma1(8));

/* 
    al final se declara sumaCurry que es una funcion que recibe un argumento 'a'
    y devuelve una función que recibe un argumento 'b' y realiza esta última
    la suma de 'a' y 'b'
*/