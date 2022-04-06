let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [k, n] = input[0].split(' ').map(Number);
let data = [];
for (let i = 1; i <= k; i++) {
  data.push(Number(input[i]));
}

let start = 1;
let end = data.reduce((a, b) => Math.max(a, b));
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end)/2); // 현재 길이
  let total = 0; // 현재 높이를 갖도록 했을 때 얻을 수 있는 랜선의 개수
  for (let x of data) total += parseInt(x / mid);

  if (total >= n) { // 갯수가 충분하므로, 길이를 높이기
    start = mid + 1;
    result = Math.max(result, mid);
  }
  else { // 갯수가 부족하므로, 길이를 줄이기
    end = mid - 1;
  }
}

console.log(result);
