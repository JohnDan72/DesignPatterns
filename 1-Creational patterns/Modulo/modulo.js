
// * Se encuetra basado en los objetos de javascript
const modulo = {
    prop1: 'mi prop',
    config: {
        language: 'es',
        cache: true,
    },
    setConfig: conf => {
        modulo.config = conf
    },
    isCacheEnabled: () => {
        console.log(modulo.config.cache ? 'sí': 'no' )
    }
}

console.log(modulo);