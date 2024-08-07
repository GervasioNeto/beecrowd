var input = require('fs').readFileSync('stdin', 'utf8');
var num = Number(input)
var initial = 2
var qtd = 2
for (i = 0; i < num; i++){
    if(initial%2 == 0){ 
        var pow = Math.pow(initial,2)
        console.log(`${initial}^${qtd} = ${pow}`)
        initial++
    }
    else {
        initial++
    }

}