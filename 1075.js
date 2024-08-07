// S = 1 + 3/2 + 5/4 + 7/8 + ... + 39/?
var s = 1
var j = 3
var k = 2
for (i = 0; i <= 100;i++){
    if (j == 39){
        break
    }
    s += (j/k)
    j += 2
    k *= 2
}
console.log((s).toFixed(2))