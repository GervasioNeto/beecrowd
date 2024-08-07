var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')
var quantidade = lines.shift()


for (i=0; i<quantidade; i++){
var nome = ''
var notas = []
var dados = lines[i].split(' ')
nome = dados.shift()
notas.push(dados.shift())
notas.push(dados.shift())
notas.push(dados.shift())
var b = ((notas[0]*2 + (notas[1]*3) + (notas[2]*5)) / 10 )
console.log(`${nome}, sua média é ${(b).toFixed(2)}`)
}
