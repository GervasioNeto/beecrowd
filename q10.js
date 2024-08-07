var input = require('fs').readFileSync('stdin', 'utf8');
var salario = parseFloat(input);
var imposto = 0

if (salario >= 4500){
var salario = salario - 4500
var imposto = (salario*0.28) + (1500*0.18) + (1000*0.08)
console.log(`R$ ${imposto.toFixed(2)}`)
} else if (salario > 3000 && salario <= 4500){
    var salario = salario - 3000
    var imposto = (salario*0.18) + (1000*0.08)
    console.log(`R$ ${imposto.toFixed(2)}`)
} else if (salario > 2000 && salario <= 3000){
    var salario = salario - 2000
    var imposto = (salario*0.08)
    console.log(`R$ ${imposto.toFixed(2)}`)
} else {
    console.log('Isento')
}
