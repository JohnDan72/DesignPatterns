// Programación tácita o free point

const f = callback => {
    const resultado = computacionPesada();
    callback( resultado )
}
// parecido al .get() de express
f((resultado) => {
    // ... code
})
// 
app.get('/users' , (req , res) => {
    // ... code
} )




// ------------------------------------
// --------Alternativa-----------------

const manejaResultado = (resultado) => {
    // ... code
}

f(manejaResultado)
// ó
f( resultado => manejaResultado(resultado))