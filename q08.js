var input = require("fs").readFileSync("stdin", "utf8");
var [i, f] = input.split(" ").map(Number);
if ((i === f)) {
  console.log("O JOGO DUROU 24 HORA(S)");
} else if (i < f) {
  var tempo = f - i;
  console.log(`O JOGO DUROU ${tempo} HORA(S)`);
} else {
    var tempo = (24 - i) + f
    console.log(`O JOGO DUROU ${tempo} HORA(S)`);
}
