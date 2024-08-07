// I=1 J=60
// I=4 J=55
// I=7 J=50
// ...
// I=? J=0
var I = 1
var J = 60
for (n = 0; n < 13; n++){
    console.log(`I=${I} J=${J}`)
    var I = I + 3
    var J = J - 5
    
}
