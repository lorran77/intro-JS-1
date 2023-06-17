var prompt = require('prompt-sync');
var prompt = prompt();

var num1=prompt('Digite 1 para iniciar o programa: ');

if (num1 == 1){

    funcoes();

}





function funcoes() {

do{

    console.log('_________________________');
    console.log('FUNÇOES');

    console.log('digite 1 para o programa potência:');
    console.log('digite 2 para o programa impar ou par:');
    console.log('digite 3 para finalizar o programa');

    var opcao=prompt('Opção: ');
    console.log('_________________________' + '\n');



if(opcao == 1) {

    potencia();
    funcoes()
    return
}

if(opcao == 2) {

    parouimpar();
    funcoes()
    return
}

if(opcao == 3) {

    console.log('Programa finalizado.');
}


} while( opcao > 3 );



}







function potencia() {


console.log('potencialização');

var num1=prompt('digite o primeiro número: ');
var num2=prompt('digite o segundo número: ');

var potencia=(parseInt(num1) ** parseInt(num2));


console.log('O resultado da potência é: ' + potencia);

}



function parouimpar() {


    
console.log('par ou impar');
var num=prompt('digite um número: ');



if(num % 2 == 0)
{
    console.log('Número par.');
}
else
{
    console.log('Número impar.');
}

}
