let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let INF = 10001;
let [n, k] = input[0].split(' ').map(Number);
let d = new Array(10001).fill(INF); 
let arr = [];

for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i])) // 각 동전 데이터 입력
}

d[0] = 0; // 동전을 아예 안 스면, 0원
for (let coin of arr) { // 하나씩 동전을 확인
  for (let x = 0; x <= k - coin; x++) { // x원을 만들 수 있는지 확인
    if (d[x] != INF) // x원을 만들 수 있다면, (x + coin)원도 만들 수 있음
    d[x + coin] = Math.min(d[x + coin], d[x] + 1);
  }
}

if (d[k] == INF) console.log(-1); // k원을 만들 수 없는 경우
else console.log(d[k]); // k원을 만들 수 있는 경우
