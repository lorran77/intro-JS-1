var prompt = require('prompt-sync');
var prompt = prompt();

fibonacci();



function fibonacci() {


    do {
       
    var numusuario=prompt('Escolha e digite um número para imprimir as etapas: ');
        
    }while(!numusuario > 0);
    // "!" = contrário da operação.//


    if(numusuario==1)
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


        for(loop=1; loop<=numusuario-1; loop++)
        {
            atual= ultimo + penultimo;
            penultimo= ultimo;
            ultimo= atual;

            console.log(atual);
        }

    
    }



    

    


   }