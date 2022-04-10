let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = input[0].split('').map(Number);
let sort = n.sort((a, b)=> b - a)


console.log(sort.join(''));
