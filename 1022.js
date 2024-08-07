var input = require('fs').readFileSync('stdin', 'utf8');
var [n1,n2] = input.split(' ').map(Number);

if (n2 > n1){
var divisao = n2 % n1
    if(divisao === 0){
        console.log('Sao Multiplos')
    } else if (divisao !== 0){
        console.log('Nao sao Multiplos')
    }
} else if (n1 > n2) {
    var divisao = n1 % n2
    if (divisao === 0){
        console.log('Sao Multiplos')
    } else if (divisao !== 0){
        console.log('Nao sao Multiplos')
    }
} else if (n1 = n2){
    console.log('Sao Multiplos')
}