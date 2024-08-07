var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number);
var tam = lines.length -1
var inv = []

for (i = tam; i >= 0 ; i--){
    inv.push(lines[i])
}

for (j = 0; j < inv.length; j++){
    console.log(`N[${j}] = ${inv[j]}`)
}