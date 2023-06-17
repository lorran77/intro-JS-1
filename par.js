var prompt = require('prompt-sync');
var prompt = prompt();

var num=prompt('digite um número: ');



if(num % 2 == 0)
{
    console.log('Número par.');
}
else
{
    console.log('Número impar.');
}