let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let [n, h] = input[0].split(' ').map(Number);

let downArr = []; // 아래 석순 분류
let upArr = []; // 위 종류석 분류
for (let i = 1; i <= n; i++) {
  if ( i % 2 == 0 ) upArr.push(Number(input[i]));
  else downArr.push(Number(input[i]));
}

let m = []; // 미터당 장애물 수

for (let i = 1; i <= h; i++) { // 미터당 장애물 수 구하기
  // 여기가 문제인것 같은데 어떻게 줄여야할지 모르겠다.
  let num = 0;
  for (let j of downArr) {
    if (i <= j) num++;
  }
  for (let j of upArr) {
    if (i > (h - j)) num++;
  }
  m.push(num);
}

m.sort((a, b) => a - b)
let mMin = Math.min(...m) // 최소 파괴 장애물 수
let start = 0;
let end = m.length;

while (start < end) { // 최소 파괴 장애물 수 갯수 
  let mid = parseInt((start + end) / 2);
  if (m[mid] > mMin) end = mid;
  else start = mid + 1;
}

console.log(mMin + ' ' + end);
