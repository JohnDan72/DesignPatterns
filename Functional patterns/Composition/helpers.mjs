// FUNCIONES HELPERS REUTILIZABLES

// 1: filtra la data de un array conforme a un callback definido por f
export const filterData = f => data => data.filter(f);

// 2: return the first element of an array
export const first = xs => xs[0];

// 3: retorna un nuevo objeto conforme al ingresado como parámetro
export const formateo = x => ({
    fullName: `${x.nombre} ${x.apellido}`,
    edad: x.edad
});

// 4: le da un formato de salida de string al objeto que se le pase como entrada
export const resFormat = x => `${x.fullName} tiene ${x.edad} de edad`;

/**
    función especial:
    * tiene como parámetros un conjunto de funciones empaquetadas en fns
    * que retorna una función que tiene como parámetro un x
    * y esta a su vez retorna un reduceRight que como valor inicial tiene al mismo x
    * y ejecuta cada función enviando como parámetro el resultado de la función anterior
*/
export const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

// lo mismo que compose pero de izquierda a derecha
export const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
