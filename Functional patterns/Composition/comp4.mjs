import { compose, filterData, first, formateo, pipe, resFormat } from "./helpers.mjs";

const users = [
    { edad: 17, nombre: 'Juan', apellido: 'Garcia' },
    { edad: 18, nombre: 'Daniel', apellido: 'Lopez' },
    { edad: 12, nombre: 'Lidia', apellido: 'Mena' },
    { edad: 1, nombre: 'Dalia', apellido: 'Garcia' },
];

const traePrimerInfante =
    pipe(
        filterData(data => data.edad < 2),
        first,
        formateo,
        resFormat,
    )

console.log(traePrimerInfante(users));
