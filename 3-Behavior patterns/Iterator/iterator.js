/**
 * se accede a 2 metodos
 * next y value
 * importante: poner un asterisco '*' despues de la palabra function
*/

function* iterador(col){
    var nextIndex = 0;

    while(nextIndex < col.length ){
        yield col[nextIndex++];
    }
}

const arr = [1,2,3,4,5,6,7,8,9,132]

const gen = iterador(arr);
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())