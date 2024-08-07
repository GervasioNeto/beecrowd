const { randomFill } = require('crypto');

var input = require('fs').readFileSync('stdin', 'utf8');
var vetor1 = input.split('\n');
var tam = Number(vetor1.shift());
var vetorseparado = vetor1[0].split(' ').map(Number);
var menorValor = 0;
var posicao = 0;

for (let i = 1; i < vetorseparado.length; i++) {
    if(menorValor == 0){
        menorValor = vetorseparado[i]
        posicao = i;
    }
    if (vetorseparado[i] < menorValor) {
        menorValor = vetorseparado[i];
        posicao = i;
    }
}

console.log(`Menor valor: ${menorValor}`);
console.log(`Posicao: ${posicao}`);

for (i=0;i<144;i++){
    console.log(21)
}