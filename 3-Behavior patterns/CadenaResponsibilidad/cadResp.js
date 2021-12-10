/**
 * se basa en que nosotros encapsulamos un dato y le agregamos metodos a este
 * jquery o loadash
*/

class Suma {
    constructor( v = 0 ){
        this.val = v;
    }

    suma(v){
        this.val += v;
        return this;
    }
}

const inst = new Suma(4);
console.log(inst.val);

inst.suma(3).suma(10);
console.log(inst.val);
