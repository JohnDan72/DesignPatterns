// ejemplo 1
const f = ( x ) => {
    return () => console.log(`valor x: ${x}`)
}
const resp = f('Juan Daniel');
resp();


// ejemplo mongoose

const auditProps = {
    createdAt: { default: new Date() },
    updatedAt: { defaut: new Date() },
    createdBy: { type: Schema.Types.ObjectId , ref: 'User' },
    updatedBy: { type: Schema.Types.ObjectId , ref: 'User' }
}

const Model = defaultProps => {
    return ( name , props ) => {
        const schema = mongoose.schema({
            ...defaultProps,
            ...props
        });

        return mongoose.model( name , schema );
    }
}

export const withAudit = Model( auditProps );

// ------------------------
//  ... en otro archivo ...
// ------------------------

withAudit('Producto', {
    nombre: {
        type: String,
        required: 'nombre requerido',
        unique: true
    },
    desc: {
        type: String,
    }
})

/* Al final el modelo de Producto tendrá tanto nombre y desc como:
    * createdAt
    * updatedAt
    * createdBy
    * updatedBy
   definidas  arriba
*/