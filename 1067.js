var input = require('fs').readFileSync('stdin', 'utf8');
var lines = Number(input);
for (i = 1; i <= lines; i++){
    if(i %2 !==0){

        console.log(i)
    }
    
    
}