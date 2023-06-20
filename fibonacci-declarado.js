var prompt = require('prompt-sync');
var prompt = prompt();

var num=prompt('digite o numero: ');
fibonacci(num);



function fibonacci(numero) {



    if(numero==1)
    {
        console.log('0');
        
    }
    

    else
    {
        let ultimo=1;
        let penultimo=0;
        let atual;

        console.log(0);
        console.log(1);


        for(loop=1; loop<=numero-1; loop++)
        {
            atual= ultimo + penultimo;
            penultimo= ultimo;
            ultimo= atual;

            console.log(atual);
        }

    
    }



    

    


   }