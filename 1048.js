var input = require('fs').readFileSync('stdin', 'utf8');
var [salario] = input.split('\n').map(Number);

if (salario >= 0 && salario <= 400){
    var novoSalario = salario * 1.15
    var reajuste = novoSalario - salario
    console.log(`Novo salario: ${novoSalario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
    console.log(`Em percentual: 15 %`)
} else if (salario > 400 && salario <= 800){
    var novoSalario = salario * 1.12
    var reajuste = novoSalario - salario
    console.log(`Novo salario: ${novoSalario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
    console.log(`Em percentual: 12 %`)
} else if (salario > 800 && salario <= 1200){
    var novoSalario = salario * 1.10
    var reajuste = novoSalario - salario
    console.log(`Novo salario: ${novoSalario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
    console.log(`Em percentual: 10 %`)
} else if (salario > 1200 && salario <= 2000){
    var novoSalario = salario * 1.07
    var reajuste = novoSalario - salario
    console.log(`Novo salario: ${novoSalario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
    console.log(`Em percentual: 7 %`)
} else if (salario > 2000){
    var novoSalario = salario * 1.04
    var reajuste = novoSalario - salario
    console.log(`Novo salario: ${novoSalario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
    console.log(`Em percentual: 4 %`)
}
