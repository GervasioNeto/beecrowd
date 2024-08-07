var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number)
var matriz = []

for (i=0;i<3; i++){
    matriz[i] = []
    for (j=0;j<3;j++){
        matriz[i][j] = lines.shift()
    }
}
console.table(matriz)

let str1 = 'pqp'
let str2 = 'n aguento mais'

let str3 = str1 + ', ' + str2
console.log(str3)
