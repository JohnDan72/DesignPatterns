
const users = [
    { edad: 17, nombre: 'Juan', apellido: 'Garcia' },
    { edad: 18, nombre: 'Daniel', apellido: 'Lopez' },
    { edad: 12, nombre: 'Lidia', apellido: 'Mena' },
    { edad: 1, nombre: 'Dalia', apellido: 'Garcia' },
];

const filterData = f => data => data.filter(f);
const first = xs => xs[0];
const formateo = x => ({
    fullName: `${x.nombre} ${x.apellido}`,
    edad: x.edad
});
const resFormat = x => `${x.fullName} tiene ${x.edad} de edad`;
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

// antes
// const traePrimerInfante = data =>
//     compose(
//         resFormat,
//         formateo,
//         first,
//         xs => xs.filter(x => x.edad < 2)
//     )(data)

// con point free
const traePrimerInfante =
    compose(
        resFormat,
        formateo,
        first,
        filterData(data => data.edad < 2)
    )

console.log(traePrimerInfante(users));
