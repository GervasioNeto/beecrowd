var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

var total = 0
var coelho = 0
var rato = 0
var sapo = 0

function mediaDeCobias(tipo,total) {
    return ((tipo / total) * 100).toFixed(2)
    
}




for (i=1; i<lines.length; i++){
    var entrada = lines[i].split(' ')
    var quantidade = Number(entrada[0])
    var tipo = entrada[1]
    total += quantidade
    
    if (tipo == 'C' || tipo == "C\r" ){
        coelho += quantidade
    }
    if (tipo == 'R' || tipo == "R\r"){
        rato += quantidade
    }
    if (tipo == 'S' || tipo == "S\r" ){
        sapo += quantidade
    }

}
// var percentualCoelho = (media(coelho,total))
// var percentualRato = (media(rato,total))
// var percentualSapo = (media(sapo,total))

console.log(`Total: ${total} cobaias
Total de coelhos: ${coelho}
Total de ratos: ${rato}
Total de sapos: ${sapo}
Percentual de coelhos: ${mediaDeCobias(coelho,total)} %
Percentual de ratos: ${mediaDeCobias(rato,total)} %
Percentual de sapos: ${mediaDeCobias(sapo,total)} %`)
