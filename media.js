var prompt = require('prompt-sync');
var prompt = prompt();

var num1=prompt('digite 1 para iniciar o programa Média do aluno: ' + '\n');



if(num1 == 1) {

    mediaaluno();
}






function mediaaluno () {

    do {
        var nota1=prompt('digite a primeira nota: ');
    } while (numero<0 || numero>10);

    do {
        var nota2=prompt('digite a segunda nota: ');
    } while (numero<0 || numero>10);

    do {
        var nota3=prompt('digite a terceira nota: ');
    } while (numero<0 || numero>10);


var media=( parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) ) / 3;



if(media >= 6)
{
    console.log('\n');
    console.log('Media final: ' + media + ' ' + ',Aprovado!!!');
    console.log('_____________________________________________');
}
if(media < 6)
{
    console.log('\n');
    console.log('Media final: ' + media + ' ' + ',Reprovado.');
    console.log('_____________________________________________');
}

}
