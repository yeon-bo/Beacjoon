let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i])
}
arr.sort((a, b) => a - b);

for (let i of arr ) {
 console.log(i); 
}
