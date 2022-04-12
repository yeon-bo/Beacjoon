let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number).sort((a, b)=> a - b);
let count = 0; // 누적 값
let result = []; // 인원 수 마다 인출 시간 배열
for (let i = 0; i < n; i++) { // 인출 시간 계산
  count += arr[i];
  result.push(count);
}
let sum = result.reduce((a, b) => a + b) // result 모두 더

console.log(sum);
