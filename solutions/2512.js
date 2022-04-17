let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = Number(input[0])
let arr = input[1].split(' ').map(Number);
let m = Number(input[2])

let start = 0;
let end = arr.reduce((a, b) => Math.max(a, b));
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (let x of arr) {
    if (x > mid) total += mid;
    else total += x;
  }
  if (m >= total) { // 총 예산이 충분하다면, 상한액을 증가
    result = mid;
    start = mid + 1;
  } else end = mid - 1; // 총 예산이 부족하다면, 상한액을 감소시키기
}

console.log(result)
