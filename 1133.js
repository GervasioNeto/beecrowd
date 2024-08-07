var input = require('fs').readFileSync('stdin', 'utf8');
var [numero1, numero2] = input.split('\n').map(Number);

var menor = Math.min(numero1, numero2);
var maior = Math.max(numero1, numero2);


for (var i = menor + 1; i < maior; i++) {
    if (i % 5 === 2 || i % 5 === 3) {
        console.log(i);
    }
}