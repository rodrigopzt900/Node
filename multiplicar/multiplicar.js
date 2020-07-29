const fs = require('fs');

let listarTabla = (base,limite) => {
    return new Promise((resolve,reject)=>{
        if( !Number(base)){
            reject(`El valor introducido ${base} no es un numero o no existe`);
        }

        console.log(`===Tabla de multiplicar===`.green);

        let tabla = '';
        for (let i = 0; i <= limite; i++) {
            console.log(`${base} * ${i} = ${i*base}`.red);
        }
    })
}


let crearArchivo = (base,limite) =>{
    return new Promise((resolve,reject)=>{

        if(!Number(base) ){
            reject(`El valor introducido ${ base } o ${limite} no es un numero`);
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i } \n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`,data, (err) => {
            if (err) 
                rejected(err)
            else
                resolve(`El archivo tabla-${base} ha sido creado!`)
          });
    })
}

module.exports = {
    crearArchivo,   //Aca se le pasa el nombre del archivo aqui y el nombre que tendra afuera
    //pero en nuestro caso ambos se va a llamar igual asi que solo se pone un crear ArCHVIO
    listarTabla
}