let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0]);
let c = Number(input[0].split(' ')[1]);
let arr = input[1].split(' ').map(Number);

let counter = new Map(); // 각 요소마다 횟수를 넣은 객체 생성
for (let i = 0; i < n; i++) {
if (counter.has(arr[i])) counter.set(arr[i], counter.get(arr[i]) + 1);
else counter.set(arr[i], 1);
}

let result = ''; // 답
let data = counter.entries(); // 객체를 배열로 바꾸기
let sorted = [...data].sort((a, b) => b[1] - a[1]);
for (let i = 0; i < sorted.length; i++) {
  for (let j = 0; j < sorted[i][1]; j++) {
    result += sorted[i][0] + ' '; // 답에 요소마다 횟수 넣기
  }
}

console.log(result)
