var prompt = require('prompt-sync');
var prompt = prompt();

var num1=prompt('digite 1 para iniciar o programa NOME: ');



if(num1 == 1) {

    nomes();
}




function nomes() {

    var nome=prompt('digite seu nome: ');
    var sobrenome=prompt('digite seu sobrenome: ');


    console.log('Seu nome é: ' + (nome) + ' ' + ( sobrenome) );
}


