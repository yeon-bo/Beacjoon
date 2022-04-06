let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let data = input[1].split(' ').map(Number);

let start = 0;
let end = data.reduce((a, b) => Math.max(a, b));
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end)/2);
  let total = 0; // 현재 높이로 잘랐을 때 얻는 나무의 양
  for (let x of data) if (x > mid) total += x - mid;

  if (total >= m) { // 얻은 나무가 충분하므로, 높이를 증가,
    start = mid + 1;
    result = Math.max(result, mid);
  }
  else { // 얻은 나무가 충분하지 않으므로, 높이를 감소
    end = mid - 1;
  }
}

console.log(result);
