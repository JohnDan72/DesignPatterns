/**
 * Immediately-invoked function expression
 * expresión de function que se ejectuta al momento de definirla
 * ayuda al nombre devars para que quede en el alcance de la función definida
 */

const resultado = (() => {
    const x = 'Hola mundo';
    console.log(x)
})();