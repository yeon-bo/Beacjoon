let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let [n, c] = input[0].split(' ').map(Number);
let arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}
arr.sort((a, b) => a - b)

let start = 1;
let end = arr[n - 1] - arr[0];

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let value = arr[0];
  let cnt = 1;
  for (let i = 1; i < n; i++) {
    if (arr[i] >= value + mid) {
      value = arr[i];
      cnt++;
    }
  }
  if (cnt >= c) { // C개 이상의 공유기를 설치할 수 있는 경우, 거리를 증가시키기
    start = mid + 1;
    result = mid; // 최적의 결과를 저장
  }
  else end = mid - 1; // C개 이상의 공유기를 설치할 수 없는 경우, 거리를 감소시키기
}

console.log(result);
