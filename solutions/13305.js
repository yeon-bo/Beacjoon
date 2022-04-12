let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = Number(input[0]);
let km = input[1].split(' ').map(Number);
let arr = input[2].split(' ').map(Number);

// 주유 비용 배열의 값을 내림차순으로 변환
let minCost = arr[0];
for (let i = 0; i < n; i++) {
  minCost = Math.min(minCost, arr[i]);
  arr[i] = minCost;
}

// 도로당 이동 비용의 합 계산
let answer = BigInt(0);
for (let i = 0; i < n - 1; i++) {
  answer += BigInt(km[i]) * BigInt(arr[i]);
}
console.log(String(answer)); // n 제거

// https://github.com/ndb796/BOJ_JavaScript/blob/main/solutions/13305.js 참고
