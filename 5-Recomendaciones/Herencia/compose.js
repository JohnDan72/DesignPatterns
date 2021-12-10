//  herencia
class Persona {
    constructor(){
        this.nombre = 'Juan Dan'
    }
    saludar(){
        console.log(`Hola soy: ${this.nombre}`)
    }
}


class Perro extends Persona {

}


// por esto

const saludar2 = name => console.log(`Hola soy: ${nombre}`)
const despedir = name => console.log(`Adios les dice: ${nombre}`)
const dormir = name => console.log(`Irá a dormir: ${nombre}`)

const persona2 = {
    nombre: 'Juancho 2',
    saludar: function(){ saludar2(this.nombre) }
}

// o

class Persona2 {
    constructor(){
        this.nombre = 'Juan Daniel'
    }
    saludar() {
        saludar2(this.nombre)
    }
    despedir(){ despedir(this.nombre) }
    dormir(){ dormir(this.nombre) }
}

class Robot {
    constructor(){
        this.nombre = 'Juan Daniel'
    }
    saludar() {
        saludar2(this.nombre)
    }
    despedir(){ despedir(this.nombre) }
}