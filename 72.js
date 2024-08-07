var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var tamanho = Number(lines[0])+1
var inn = 0
var out = 0


for (i = 1; i < tamanho; i++){
    if (lines[i]>=10 && lines[i] <= 20 ){
        inn++
    }
    else {
        out++
    }

}
console.log(`${inn} in
${out} out`)