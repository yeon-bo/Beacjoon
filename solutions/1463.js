let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let n =Number(input[0]);
let d = new Array(n + 1).fill(0);

// 다이나믹 프로그래밍 진행(보텀업)
for(let x = 2; x <= n; x++) {
  // 현재의 수에서 1을 빼는 경우
  d[x] = d[x - 1];
  // 현재의 수가 2로 나누어 떨어지는 경우
  if ( x % 2 == 0 ) {
    d[x] = Math.min(d[x], d[parseInt(x / 2)])
  }
  // 현재의 수가 3으로 나누어 떨어지는 경우
  if ( x % 3 == 0 ) {
    d[x] = Math.min(d[x], d[parseInt(x / 3)])
  };
  d[x]++;
}

console.log(d[n]);
