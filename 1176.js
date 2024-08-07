var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number)
var vezes = lines.shift()
var vetorseila = [0,1,1]
for (i=3; i<=60; i++){
    vetorseila.push((vetorseila[i-1]+vetorseila[i-2]))
}

 for (i=0; i<vezes; i++){
    console.log(`Fib(${lines[i]}) = ${vetorseila[lines[i]]}`)
}