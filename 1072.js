var input = require('fs').readFileSync('stdin', 'utf8');
const valores = input.split('\n').map(Number);



function encontrarMaiorValorEPosicao(valores){
    let maiorValor = valores[0]
    let position = 1


    for (i = 0; i < valores.length; i++){
        if (valores[i] > maiorValor){
            maiorValor = valores[i]
            position = i + 1
        }
    }

    return {maiorValor, position};
}
 const { maiorValor, position } = encontrarMaiorValorEPosicao(valores);
 console.log(maiorValor);
 console.log(position);


// function encontrarMaiorValorEPosicao(valores) {
//     let maiorValor = valores[0];
//     let posicao = 1;

//     for (let i = 1; i < 99; i++) {
//         if (valores[i] > maiorValor) {
//             maiorValor = valores[i];
//             posicao = i + 1;
//         }
//     }

//     return { maiorValor, posicao };
// }

// const { maiorValor, posicao } = encontrarMaiorValorEPosicao(valores);
// console.log(maiorValor);
// console.log(posicao);