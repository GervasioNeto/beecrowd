function identificarEstado(placa) {
    // Remove os caracteres especiais da placa e converte para letras maiúsculas
    placa = placa.replace(/[^a-zA-Z]/g, '').toUpperCase();

    // Sequência alfabética que pertence ao Paraná (AAA a BEZ)
    var parana = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').reduce((acc, curr) => {
        for (let i = 0; i < 26; i++) {
            acc.push('A' + curr + String.fromCharCode(65 + i));
        }
        return acc;
    }, []);

    // Verifica se a placa está na lista do Paraná
    if (parana.includes(placa)) {
        return 'O veículo é do Paraná';
    } else {
        return 'Estado não identificado';
    }
}

// Exemplo de uso:
var placa = 'BAA'; // Substitua pela placa do veículo
var estado = identificarEstado(placa);
console.log(estado);