var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number)
let multiplosD2 = []
let multiplosD3 = []
let ambos = []

for (i = 0; i< lines.length; i++){
    if (lines[i] % 2 == 0){
        multiplosD2.push(lines[i])
    }
    if (lines[i] % 3 == 0){
        multiplosD3.push(lines[i])
    }
    if (lines[i]%2 == 0 && lines[i]% 3 == 0){
        ambos.push(lines[i])
    }
}
console.log(`Números multiplos de 2: ${multiplosD2}`)
console.log(`numeros multiplos de 3: ${multiplosD3}`)
console.log(`multiplo de ambos: ${ambos}`)