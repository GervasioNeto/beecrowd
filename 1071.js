var input = require('fs').readFileSync('stdin', 'utf8');
var [x,y] = input.split('\n').map(Number);

var soma = 0
var menor = Math.min(x,y)
var maior = Math.max(x,y)

for (var i = menor+1; i<maior; i++){
    if(i%2 != 0){
        soma += i
    }
}
console.log(soma)