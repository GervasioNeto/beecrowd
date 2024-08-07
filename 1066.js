var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number);
var pares = 0
var impares = 0
var pos = 0
var neg = 0
for (i = 0; i < lines.length; i++){
    if(lines[i] % 2 === 0){
        pares++
    }if (lines[i] % 2 !== 0) {
        impares++
    } if (lines[i] > 0){
        pos++
    } if (lines [i] < 0){
        neg++
    }
} console.log(`${pares} valor(es) par(es)
${impares} valor(es) impar(es)
${pos} valor(es) positivo(s)
${neg} valor(es) negativo(s)`)