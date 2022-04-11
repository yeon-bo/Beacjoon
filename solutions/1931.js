let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
// let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(' ').map(Number));
}
arr.sort((a, b) => {
  if (a[1] != b[1]) return a[1] - b[1];
  else return a[0] - b[0];
});

console.log(arr); 
let count = 1;
let cnt = 0;
for (let i = 1; i < n; i++) {
  if (arr[cnt][1] <= arr[i][0]) {
  cnt = i;
  count++;
}}

console.log(count);
