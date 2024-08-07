var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var coluna = parseInt(lines.shift().trim());
var operacao = lines.shift().trim();
var matriz = [];

// Ler a matriz de 12x12
for (var i = 0; i < 12; i++) {
    matriz[i] = [];
    for (var j = 0; j < 12; j++) {
        matriz[i][j] = Number(lines.shift().trim());
    }
}
var soma = 0.0;

for (var i = 0; i < 12; i++) {
    soma += matriz[i][coluna];
}

if (operacao === 'M') {
    soma /= 12;
}

console.log(soma.toFixed(1));
