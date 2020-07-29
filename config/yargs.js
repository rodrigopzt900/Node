const colors = require('colors');

const opts = {  
    base: {
        demand:true,
        alias:'b'
    },
    limite:{
        alias: 'l',
        default: 10
    }}

const argv = require('yargs')
        .command('listar','Imprime la tabla de multiplicar',opts)
        .command('crear','Imprime la tabla de multiplicar',opts)
        .help().argv;


module.exports = {
    argv
}