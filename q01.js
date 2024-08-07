var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var [x1,y1] = lines[0].split(' ').map(Number);
var [x2,y2] = lines[1].split(' ').map(Number);
var powX = Math.pow((x2-x1), 2)
var powY = Math.pow((y2-y1),2)
var distancia = Math.sqrt(powX + powY)
console.log(distancia.toFixed(4))


// console.log(powX)
//console.log(Math.sqrt(((x2-x1)*(x2-x1)))+(y2-y1))