var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number);
var soma = 0;
var pares = 0;
for (var i = 0; i < lines.length; i++){
    if (lines[i] > 0){
        soma = soma + lines[i]
        pares++
        var media = soma / pares
    }
}
console.log(`${pares} valores positivos
${media.toFixed(1)}`)