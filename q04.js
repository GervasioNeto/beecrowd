var input = require('fs').readFileSync('stdin', 'utf8');
var totalDias = parseInt(input);
let qtdAnos = totalDias / 365
totalDias = totalDias % 365

let qtdMeses = totalDias / 30
totalDias = totalDias % 30

let qtdDias = totalDias

console.log(`${Math.floor(qtdAnos)} ano(s)`)
console.log(`${Math.floor(qtdMeses)} mes(es)`)
console.log(`${Math.floor(qtdDias)} dia(s)`)