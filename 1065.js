var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number);
var pares = 0;
for (i = 0; i < lines.length; i++){
    if(lines[i] % 2 === 0 || lines[i] === 0){
        pares++
    }
}
console.log(`${pares} valores pares`)