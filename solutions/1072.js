let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let [x, y] = input[0].split(' ').map(Number);

let start = 0;
let end = 1e9;
let target = parseInt(BigInt(y) * BigInt(100) / BigInt(x));
let result = -1;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let check = false;
  let current = parseInt((BigInt(y + mid) * BigInt(100)) / BigInt(x + mid));
  if (current != target) check = true;
  if (check) { // 승률이 변한다면 "추가로 이긴 횟수"를 감소
    result = mid;
    end = mid - 1;
  } else { // 승률이 변하지 않는다면 "추가로 이긴 횟수"를 증가
    start = mid + 1;
  }
}

if (result == -1) {
  console.log(-1);
} else {
  console.log(result);
}

// BigInt 더 공부 바람...
