const emitter=require('./events')

function logg(message){
    console.log(message,emitter);
    emitter.emit('send' , {id:message,value:10})
}



module.exports=logg;
logg('x')