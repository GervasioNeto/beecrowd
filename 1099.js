var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var num = Number(lines.shift())
for(i = 0; i < num; i++){
    var [x,y] = lines[i].split(' ').map(Number)
    var menor = Math.min(x,y)
    var maior = Math.max(x,y)
    var somaImpar = 0
        for(j = menor +1; j < maior ; j++){
            if(j%2 != 0){
                somaImpar += j
                
            }
        }
    console.log(somaImpar)
 }
