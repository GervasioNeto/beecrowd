var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let numero = parseInt(lines.shift())
let qntHorasTrabalhadas = parseInt(lines.shift())
let valorHoraTrabalhada = parseFloat(lines.shift())
let salario = qntHorasTrabalhadas * valorHoraTrabalhada

console.log("NUMBER = "+ numero)
console.log("SALARY = U$ " + salario.toFixed(2))

