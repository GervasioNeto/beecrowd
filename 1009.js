var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number);

let nome = (lines.shift())
let salarioFixo = (lines.shift())
let vendas = (lines.shift())
const comisssao = 0.15
let salariototal = Number(salarioFixo + (vendas * comisssao))

console.log("TOTAL = R$ "+salariototal.toFixed(2))