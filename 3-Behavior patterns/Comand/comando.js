/**
 * nos entrega una intefaz unificada
 * donde podemos llamar al final de la implementación
 * una manera más simple por medio de la interfaz
 */

const Commander = (() => {
    const o = {
        comprar: prod => { console.log(`comprando: ${prod}`) },
        vender: prod => { console.log(`vendiendo: ${prod}`) }
    }

    return {
        run: ( comando , args ) => {
            if( !o[comando] ){
                console.log("el comando no existe");
                return;
            }
            o[comando](args)
        }
    }
})();

Commander.run( 'vender' , 'pc gamer' );
Commander.run( 'comprar' , 'pc gamer' );
Commander.run( 'asd' , 'pc gamer' );