let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = Number(input[0])
let arr = input[1].split(' ').map(Number);
arr.sort((a, b)=> a - b);

let result = 1;
for (x of arr) {
// 잴 수 없는 무게를 찾았을 때
if (result < x) break;
  result += x;
}

console.log(result)
