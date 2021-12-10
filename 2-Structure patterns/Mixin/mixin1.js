/**
 * nos ayuda a tomar una calse y darle mas funcionalidad de la original
 * sin alterar el original
 */

// mixin
let mixin = {
    saludar(){
        console.log(`Hola ${this.nombre}`)
    },
    despedir(){
        console.log(`Adios ${this.nombre}`)
    }
};

// clase
class Usuario{
    constructor(nombre){
        this.nombre = nombre
    }
}

// aumentamos el prototipo
Object.assign(Usuario.prototype , mixin)

// resultado
const newUser = new Usuario('Juancho');
newUser.saludar();