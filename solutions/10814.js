let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(' '));
}
let sort = arr.sort((a, b)=> a[0] - b[0])

for (let input of sort) {
 console.log(input[0] + ' ' + input[1]); 
