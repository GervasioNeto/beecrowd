var input = require("fs").readFileSync("stdin", "utf8");
var [hI, mI, hF, mF] = input.split(" ").map(Number);
if (((hI === mI) === hF) === mF) {
    console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
} else if (hI > hF && mI > mF) {
  hora = 24 - (hI - hF);
  minuto = 60 - (mI - mF);
  console.log(`O JOGO DUROU ${hora} HORA(S) E ${minuto} MINUTO(S)`);
} else if (hI > hF && mI < mF) {
  hora = 24 - (hI - hF);
  minuto = mI + 60 - mF;
} else if (hI < hF && mI < mF) {
  hora = hI + 24 - hF;
  minuto = mI + 60 - mF;
  console.log(`O JOGO DUROU ${hora} HORA(S) E ${minuto} MINUTO(S)`);
} else if (hI < hF && mI > mF){
    hora = hI + 24 - hF;
    minuto = 60 - (mI - mF);
    console.log(`O JOGO DUROU ${hora} HORA(S) E ${minuto} MINUTO(S)`);
} else if (hI == hF && mI < mF){
    var hora = 0
    minuto = mI + 60 - mF;
    console.log(`O JOGO DUROU ${hora} HORA(S) E ${minuto} MINUTO(S)`);
} else if (hI == hF && mI > mF){
    var hora = 0
    minuto = 60 - (mI - mF);
} else if (hI < hF && mI == mF){
    hora = hI + 24 - hF;
    minuto = 0;
    console.log(`O JOGO DUROU ${hora} HORA(S) E ${minuto} MINUTO(S)`);
} else if (hI > hF && mI == mF){
    hora = 24 - (hI - hF);
    minuto = 0;
    console.log(`O JOGO DUROU ${hora} HORA(S) E ${minuto} MINUTO(S)`);
} 
