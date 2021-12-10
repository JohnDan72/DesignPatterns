/**
 * el publisher y suscriptor
 * se suscriben al mediator
 */

const Emitter = (() => {
    const topics = {};
    const hOP = topics.hasOwnProperty;

    return {
        on: ( topic , listener ) => {
            if( !hOP.call( topics , topic) ) topics[topic] = []
            topics[topic].push(listener);
        },
        emit: ( topic , info ) => {
            if( !hOP.call(topics,topic) ) return;
            topics[topic].forEach( item => {
                item( info != undefined ? info : {})
            });
        }
    }
})()


Emitter.on('lala' , x => console.log("x ",x));
Emitter.emit('lala', { lala: 'lolo' } );