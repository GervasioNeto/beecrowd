var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ').map(Number);
var [A,B,C] = lines
const pi = 3.14159
console.log(`TRIANGULO: ${((A*C) / 2).toFixed(3)}`);
console.log(`CIRCULO: ${(pi * (C*C)).toFixed(3)}`);
console.log(`TRAPEZIO: ${(((A+B) * C) / 2).toFixed(3)}`);
console.log(`QUADRADO: ${(B*B).toFixed(3)}`);
console.log(`RETANGULO: ${(A*B).toFixed(3)}`);

