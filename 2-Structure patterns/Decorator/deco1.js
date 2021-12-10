/**
 * toma las instancias de una clase y les agrega nuevas funcionalidades
 */

//---------------------------------------------
// ejemplo 1
class Macbook {
    constructor(){
        this.precio = 1000;
        this.pantalla = 11.6;
    }
}

const macbook = new Macbook();
console.log(macbook.precio);

macbook.agregarMemoria = function(){ this.precio += 150; }

macbook.agregarMemoria();
console.log(macbook.precio)

//---------------------------------------------
// ejemplo 2
class Macbook2 {
    precio() { return 1000; }
}
const memoria = mac => {
    const oldPrice = mac.precio();
    mac.precio = function(){
        return oldPrice + 350;
    }
}

const mac2 = new Macbook2();
console.log(mac2.precio());
memoria(mac2);
console.log(mac2.precio());

