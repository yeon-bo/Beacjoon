let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = input[0];
let m = input[1].split('').map(Number);
let result = m.reduce((a, b) => a+b);

console.log(result)
