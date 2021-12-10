
const users = [
    { edad: 17  , nombre: 'Juan'    , apellido: 'Garcia' },
    { edad: 18  , nombre: 'Daniel'  , apellido: 'Lopez' },
    { edad: 12  , nombre: 'Lidia'   , apellido: 'Mena' },
    { edad: 1   , nombre: 'Dalia'   , apellido: 'Garcia' },
];

const traePrimerInfante = data => {
    const infantes = data.filter( us => us.edad < 2 );
    const primerEncontrado = infantes.shift();
    const infante = {
        fullName: `${primerEncontrado.nombre} ${primerEncontrado.apellido}`,
        edad: primerEncontrado.edad
    }

    return `${infante.fullName} tiene ${infante.edad} de edad`;
}


console.log(traePrimerInfante(users));
