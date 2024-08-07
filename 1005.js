const { addAbortListener } = require('events');

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines.shift())
var b = parseInt(lines.shift())
var c = parseInt(lines.shift())
var d = parseInt(lines.shift())
//  DIFERENCA = (A * B - C * D).
console.log("DIFERENCA = " + ((a*b) - (c*d)))

var c = parseInt(lines[0])
var d = parseFloat(lines.shift())