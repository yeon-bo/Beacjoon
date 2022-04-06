let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = input[0];
let m = input[1].split(' ').map(Number);
let max = Math.max(...m);
let newM = m.map(( x => x / max * 100));
let result = newM.reduce((a,b)=> a+b) / n;

console.log(result);
