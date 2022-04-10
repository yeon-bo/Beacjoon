let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]))
}
arr.sort((a, b) => a - b);

const result1 = Math.round(arr.reduce((a, b) => a + b)/ n); // 산술평균
const result2 = arr[parseInt(n / 2)]; // 중앙값
let result3 = 0; // 최빈값

let count = new Map();
for (let i = 0; i < n; i++) {
  if (count.has(arr[i])) {
    count.set(arr[i], count.get(arr[i]) + 1);
  } else {
    count.set(arr[i], 1);
  }
}
let maxValue = 0;
let maxElements = [];
for (let key of count.keys()) {
  if (maxValue < count.get(key)) {
    maxValue = count.get(key);
    maxElements = [key];
  }
  else if (maxValue == count.get(key)) {
    maxElements.push(key);
  }
}
if (maxElements.length >= 2) { // 최빈값 
  result3 = maxElements[1];
} else {
  result3 = maxElements[0];
}

const result4 = Math.max(...arr) - Math.min(...arr); // 범위

console.log(result1 + '\n' + result2 + '\n' + result3 + '\n' + result4);
