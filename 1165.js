var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number);
var quantidade = lines.shift()

for (j=0; j < quantidade; j++){
    if(ehPrimo(lines[j])){
        console.log(`${lines[j]} eh primo`)
    } else {
        console.log(`${lines[j]} nao eh primo`)
    }
}




function ehPrimo(n) {
    if (n <= 1) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i == 0) return false;
    }
    return true;
}