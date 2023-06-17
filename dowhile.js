var prompt = require('prompt-sync');
var prompt = prompt();



do {

    var numero=prompt('digite um número de 1 a 10: ');
    
} while (numero<1 || numero>10);
//lógica para avançar o programa, obrigando o usuario a digitar números de 1 a 10.//

    console.log('Você digitou o número: ' + numero);
