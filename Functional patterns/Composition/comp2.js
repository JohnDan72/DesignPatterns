
const users = [
    { edad: 17, nombre: 'Juan', apellido: 'Garcia' },
    { edad: 18, nombre: 'Daniel', apellido: 'Lopez' },
    { edad: 12, nombre: 'Lidia', apellido: 'Mena' },
    { edad: 1, nombre: 'Dalia', apellido: 'Garcia' },
];

const first = xs => xs[0];
const formateo = x => ({
    fullName: `${x.nombre} ${x.apellido}`,
    edad: x.edad
});
const resFormat = x => `${x.fullName} tiene ${x.edad} de edad`;


const traePrimerInfante = data =>
    resFormat(formateo(first(data.filter(us => us.edad < 2))));

console.log(traePrimerInfante(users));
