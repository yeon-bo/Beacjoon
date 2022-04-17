let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]))
}
arr.sort((a, b)=> b - a)

let result = [];
for (let i = 0; i < n; i++) {
  let total = [];
  total.push(arr[i])
  result.push(Math.min(...total)*(i+1))
}
console.log(Math.max(...result))
