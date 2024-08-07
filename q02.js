var input = require('fs').readFileSync('stdin', 'utf8');
var valor = parseInt(input);
console.log(valor)
var notas = parseInt(valor / 100)
console.log(`${notas} nota(s) de R$ 100,00`)
valor = valor % 100
notas = parseInt(valor / 50)
console.log(`${notas} nota(s) de R$ 50,00`)
valor = valor % 50
notas = parseInt(valor / 20)
console.log(`${notas} nota(s) de R$ 20,00`)
valor = valor % 20
notas = parseInt(valor / 10)
console.log(`${notas} nota(s) de R$ 10,00`)
valor = valor % 10
notas = parseInt(valor / 5)
console.log(`${notas} nota(s) de R$ 5,00`)
valor = valor % 5
notas = parseInt(valor / 2)
console.log(`${notas} nota(s) de R$ 2,00`)
valor = valor % 2
notas = parseInt(valor)
console.log(`${notas} nota(s) de R$ 1,00`)