var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var golI = 0
var golG = 0
var vitoriaG = 0
var vitoriaI = 0
var empate = 0
var grenais = 1
console.log(`Novo grenal (1-sim 2-nao)`)
for (i = 0; i<lines.length; i++){
    if (lines[i] == 2){
        break
    }
    if (lines[i] == 1){
        console.log(`Novo grenal (1-sim 2-nao)`)
        grenais++
    }
    var [golInter,golGremio] = lines[i].split(' ').map(Number)
    golI += golInter
    golG += golGremio
    if (golGremio > golInter){
        vitoriaG++
    }
    if (golInter > golGremio){
        vitoriaI++
    }
    if (golInter == golGremio){
        empate++
    }

}
console.log(`${grenais} grenais
Inter:${vitoriaI}
Gremio:${vitoriaG}
Empates:${empate}`)
if(vitoriaI > vitoriaG){
    console.log('Inter venceu mais')
}
if(vitoriaG > vitoriaI){
    console.log('Gremio venceu mais')
}
if(vitoriaG == vitoriaI){
    console.log('Nao houve vencedor')
}
