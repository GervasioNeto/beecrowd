var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')
var operacao = lines.shift().trim()
var numeros = lines.map(Number)
var matriz = []
var paresDP = 0
var diagonalSec = 0
var imparesDS = 1

// Ler a matriz
for (i=0;i  < 3; i++){
    matriz[i] = []
    for (j = 0; j<3;j++){
        matriz[i][j] = numeros.shift()
    }
}
console.table(matriz)
// problema
for (i = 0; i<3;i++){
    for (j=0; j<3;j++){
        if (i == j){
            if (matriz[i][j] % 2 == 0){
                paresDP += matriz[i][j]
            }
        }
        if ((i+j) == 2){
            if(matriz[i][j] % 2 !== 0){
                imparesDS *= matriz[i][j]
            }
        }
    }
}