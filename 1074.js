var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var num = lines.shift()
for(var i = 0; i < num; i++){
    var valorLido = lines[i].split('\n').map(Number)
    if (valorLido == 0){
        console.log('NULL')
    }
    else {console.log(`${parOuImpar(valorLido)} ${negOuPos(valorLido)}`)
}
}
function parOuImpar(a){
    if (a == 0){
        return ''
    }
    else if(a % 2 == 0){
        return 'EVEN'
    }
    else if(a%2 != 0) {
        return 'ODD'
    }


}

function negOuPos(a){
    if(a > 0){
        return 'POSITIVE'
    }
    else if (a < 0){
        return 'NEGATIVE'
    }
    else if (a == 0){
        return ''
    }
}