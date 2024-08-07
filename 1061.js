// var input = require('fs').readFileSync('stdin', 'utf8');
// var [a,b,c,d] = input.split('\n')
// var [dia1,num1] = a.split(' ')
// var [h1,doisp, minuto1, doispdois, seg1] = b.split(' ')
// var [h2, dps, minuto2, sadasd, seg2] = d.split(' ')
var input = require('fs').readFileSync('stdin', 'utf8').trim().split('\n');

function calcularDuracaoEvento(entrada) {

    const inicioDia = parseInt(entrada[0].split(' ')[1]);
    const [inicioHora, inicioMinuto, inicioSegundo] = entrada[1].split(' : ').map(Number);
    const fimDia = parseInt(entrada[2].split(' ')[1]);
    const [fimHora, fimMinuto, fimSegundo] = entrada[3].split(' : ').map(Number);


    const segundosPorDia = 24 * 60 * 60;
    const segundosPorHora = 60 * 60;
    const segundosPorMinuto = 60;

    const segundosInicio = inicioDia * segundosPorDia + inicioHora * segundosPorHora + inicioMinuto * segundosPorMinuto + inicioSegundo;
    const segundosFim = fimDia * segundosPorDia + fimHora * segundosPorHora + fimMinuto * segundosPorMinuto + fimSegundo;

    let diferencaSegundos = segundosFim - segundosInicio;


    const dias = Math.floor(diferencaSegundos / segundosPorDia);
    diferencaSegundos %= segundosPorDia;

    const horas = Math.floor(diferencaSegundos / segundosPorHora);
    diferencaSegundos %= segundosPorHora;

    const minutos = Math.floor(diferencaSegundos / segundosPorMinuto);
    diferencaSegundos %= segundosPorMinuto;

    const segundos = diferencaSegundos;

    return `${dias} dia(s)\n${horas} hora(s)\n${minutos} minuto(s)\n${segundos} segundo(s)`;
}


const duracao = calcularDuracaoEvento(input);
console.log(duracao);