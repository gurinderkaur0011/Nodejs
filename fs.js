const fs= require('fs');

//Synchronus(Blocking)
const files=fs.readdirSync('./');
console.log(files);

// Asynchronus method (non  blocking) .. use this
fs.readdir('./',(err,files)=>{
    if(!err) console.log('Results : ' +files) 
    else console.log('Error :' + err)
})

    fs.readdir('d:/',(err,files)=>{
        if(!err) console.log('Results : ' +files) 
        else console.log('Error :' + err)
    })

