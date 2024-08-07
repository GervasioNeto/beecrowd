var input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.trim().split('\n');

for (let i = 0; i < lines.length; i++) {
    const [x, y] = lines[i].split(' ').map(Number);

    if (x === 0 || y === 0) {
        break; // Encerra o programa quando pelo menos uma das coordenadas for nula
    }

    if (x > 0 && y > 0) {
        console.log('primeiro');
    } else if (x < 0 && y > 0) {
        console.log('segundo');
    } else if (x < 0 && y < 0) {
        console.log('terceiro');
    } else if (x > 0 && y < 0) {
        console.log('quarto');
    }
}