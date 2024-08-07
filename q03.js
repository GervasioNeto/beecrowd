var input = require('fs').readFileSync('stdin', 'utf8');
var segundos = parseInt(input);
var qtdHora = segundos / 3600
segundos = segundos % 3600
var qtdMinutos = segundos / 60
segundos = segundos % 60
var qntSegundos = segundos
console.log(`${Math.floor(qtdHora)}:${Math.floor(qtdMinutos)}:${Math.floor(qntSegundos)}`)
