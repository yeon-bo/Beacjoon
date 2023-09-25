let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');
let line = input[0].split(' ');

let a = parseInt(line[0]);
let b = parseInt(line[1]);
let c = parseInt(line[2]);

console.log(parseInt((a+b)%c))
console.log(parseInt(((a%c) + (b%c))%c))

console.log(parseInt((a*b)%c))
console.log(parseInt(((a%c) * (b%c))%c))
