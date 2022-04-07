let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = []; // 값 배열
let result = []; // 숫자당 앞 5숫자가 배열에 있었을시 횟수
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]))
}

for ( let num of arr ) {
  let count = 0; // 5숫자가 배열에 있었을시 횟수
  for (let i = 0; i < 5; i++) {
    if (arr.includes( num + i )) {
      count++
    }
  }
  result.push(count)
}

console.log(5 - Math.max(...result))
