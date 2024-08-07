var input = require("fs").readFileSync("stdin", "utf8");
const lines = input.trim().split("\n").map(Number);
var provas = 0;
var nota = 0;
// var media = (nota/provas).toFixed(2)

for (i = 0; i < lines.length; i++) {
  if (lines[i] >= 0 && lines[i] <= 10) {
    provas++;
    nota += lines[i];
    if (provas == 2) {
      const media = (nota / provas).toFixed(2);
      console.log(`media = ${media}`);
      break;
    }
  } else {
    console.log("nota invalida");
  }
}

// for (i = 0; i < lines.length; i++){
//     if (provas == 2){
//         const media = (nota / provas).toFixed(2);
//         console.log(`media = ${media}`);
//         break;
//     }
//     if (lines[i] >= 0 && lines[i] <= 10){
//     provas++
//     nota += lines[i]
// }
//     else {
//         else{
//         console.log('nota invalida')
//     }
// }
// }
