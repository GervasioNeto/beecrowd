var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

var operacao = lines.shift().trim();
var matriz = [];

// Ler a matriz de 12x12
for (var i = 0; i < 12; i++) {
    matriz[i] = [];
    for (var j = 0; j < 12; j++) {
        matriz[i][j] = parseFloat(lines.shift().trim());
    }
}

var soma = 0.0;
var count = 0;

for (var i = 0; i < 12; i++) {
    for (var j = 0; j < 12; j++) {
        if (i + j > 11) {
            soma += matriz[i][j];
            count++;
        }
    }
}

if (operacao === 'M') {
    soma /= count;
}

console.log(soma.toFixed(1));