const EventEmitter=require('events');
const emitter= new EventEmitter();
const logg=require('./logger');
emitter.on('send',(e)=>{
    console.log('Sent :' , e.value)
})

emitter.emit('send',{id:1, value:5});

module.exports=emitter;

logg('x')