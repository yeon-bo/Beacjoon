let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let data = [];

for (let i = 1; i <= n; i++) {
  data.push(input[i]);
}
data = [...new Set(data)];

function compare (a, b) {
  if (a.length == b.length) {
    if (a < b) return -1;
    if (a > b) return 1;
    else return 0;
  } // 사전순 정렬
  else return a.length - b.length; // 길이순 정렬
}

data.sort(compare)

for (let x of data) console.log(x);
