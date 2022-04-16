let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = Number(input[0])
let arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]))
}

// 피보나치 수 계산
pibo = [];
pibo.push(0);
pibo.push(1);
while (pibo[pibo.length - 1] < 1e9) pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1]);

for (let i = 0; i < n; i++) {
  let result = []; // 해당 수의 피보나치 수
  let num = arr[i]; // 해당 수
  let j = pibo.length - 1; // 피보나치 수의 최대 값
  while (num > 0) {
    if (num >= pibo[j]) {
      result.push(pibo[j]);
      num -= pibo[j];
    } else {
      j--;
    }
  }
  result.sort((a, b)=> a - b)
  console.log(result.join(' '))
}
