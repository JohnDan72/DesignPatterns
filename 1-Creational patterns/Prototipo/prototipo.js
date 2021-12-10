/* 
    basado en tomar un objeto 
    definido y en base a ese objeto 
    generar prototipos para otros objetos
*/

const perro = {
    raza: 'Maltez',
    ladrar: function(){
        console.log(`gufff , soy un ${this.raza}`)
    }
}

const maltez1 = Object.create(perro);
const maltez2 = Object.create(perro);

maltez2.raza = 'perro 2';

maltez1.ladrar();
maltez2.ladrar();

maltez1.raza = 'Super perro !!!';
maltez2.raza = 'Super perro 2 !!!';

maltez1.ladrar();
maltez2.ladrar();