var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

for (var i = 0; i < lines.length; i++) {
    var valores = lines[i].split(' ').map(Number);
    var M = valores[0];
    var N = valores[1];

    if (M <= 0 || N <= 0) {
        break;
    }

    var menor = Math.min(M, N);
    var maior = Math.max(M, N);
    var sequencia = [];

    for (var j = menor; j <= maior; j++) {
        sequencia.push(j);
    }

    var soma = sequencia.reduce(function (total, numero) {
        return total + numero;
    });

    console.log(sequencia.join(' ') + ' Sum=' + soma);
}

// for (var i = 0; i< lines.length; i++){
//     var [x,y] = lines.map(Number)
//     if( x == 0 || y == 0){
//         break
//     }
//     var maior = Math.max(x,y)
//     var menor = Math.min(x,y)
//         for(i = menor; i < maior; i++){
//             console.log(i)
//         }
// }