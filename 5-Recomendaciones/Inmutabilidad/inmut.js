
const obj = {
    a: 23
}

// copia de obj pero campos distintos
const obj2 = {
    ...obj
}

console.log(obj)
console.log(obj2)

obj.b = 4;
obj.a = 'cambio';

console.log(obj)
console.log(obj2)
