let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let [x, y] = input[0].split(' ').map(Number);
let n = input[1].split(' ').map(Number);
let m = input[2].split(' ').map(Number);
let result = [];

for (let i = 0; i < x; i++) {
  result.push(n[i])
}
for (let i = 0; i < y; i++) {
  result.push(m[i])
}
result.sort((a, b)=> a - b)

console.log(result.join(' '))





// 입력에서 주는 배열을 모두 합치되 중복 숫자를 없이 출력하는 것으로 잘못 이해해서 처음 풀었던 방식
// 아까워서 같이 기록.

let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = [];
let result = new Set([]);

for (let i = 0; i < input.length; i++) n.push(input[i].split(' ').map(Number));
for (let x of n) {
  result.add(x[0]);
  result.add(x[1]);
}

let answer = [...result];

console.log(answer.join(' '))
