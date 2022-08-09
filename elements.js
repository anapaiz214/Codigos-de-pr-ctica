function sym(args){
    let elementos=[];
    var i, j, contador=0;
    var aux = 0;
                                                                                                                   
    for (i=0; i<args.length; i++)
    {
        for(j=0; j<args[i].length; j++)
        {
            elementos.push(args[i][j]);
        }
    }
    args = [];
    for (i=0; i<elementos.length; i++)
    {
        aux = elementos[i];
        
        for (j=i+1; j<elementos.length; j++)
        {
            if (elementos[j] == aux)
            {
                contador++;
                elementos.splice(j, 1);
            }
        }
        if (contador < 1)
        {
            args.push(aux);
            
        } else  {
            contador=0;     
        }
    }
    
   return args;
}
console.log(sym([[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]]));
