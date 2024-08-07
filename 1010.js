var input = require('fs').readFileSync('stdin', 'utf8');
var raio = Number(input)
const pi = 3.14159
var volume  =  (4/3) * pi * (raio*raio*raio)
console.log(`VOLUME = ${volume.toFixed(3)}`)
