let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
// let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = Number(input[0]);
const arr = []; // 값 배열
let result = 0; // 답
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]))
}

let sortArr = arr.sort((a, b) => b - a); // 값 내림차순
for(let i = 0; i < n; i++) { // 최대 수 3개의 값이 삼각형이 될 수 있는지 확인
  if (sortArr[0 + i] < sortArr[1 + i] + sortArr[2 + i]) {
    result = sortArr[0 + i] + sortArr[1 + i] + sortArr[2 + i]
    break; // 최대값이 삼각형이 될 수 있다면 반복문에서 벗어남
  }
}

console.log(result > 0 ? result : -1)
