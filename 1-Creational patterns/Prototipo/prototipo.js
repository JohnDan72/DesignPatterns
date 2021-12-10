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

maltez1.ladrar();
maltez1.raza = 'Super perro !!!';
maltez1.ladrar();