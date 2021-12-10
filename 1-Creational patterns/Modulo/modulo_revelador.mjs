import fetch from "node-fetch";

// EJEMPLO 1
// * contiene una api public y una privada
// * la api publica ayuda a modificar la api privada
// contiene un iife (immediately-invoked function expression)

// api publica: métodos a y b
// api privada: objeto x
const resultado = (() => {
    const x = {};
    
    return {
        a: () => console.log(x),
        b: ( key , val ) => x[key] = val
    }
})();


resultado.a();
resultado.b('queso','cabra');
resultado.a();


// EJEMPLO 2
// modulo que guarde en una api de users y de productos

const Users = (() => {
    const recurso = 'https://jsonplaceholder.typicode.com/users'

    return {
        listar: async() => {
            const data = await fetch(`${recurso}`).then( x => x.json() )
            console.log(data);
        },
        crear: async ( data ) => {
            await fetch(`${recurso}` , { method: 'post', body: JSON.stringify(data) }).then( resp => resp.json() );
        }

    }
})();


Users.listar();