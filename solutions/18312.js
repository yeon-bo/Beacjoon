let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, k] = input[0].split(' ').map(Number);

let result = 0;
for(let i = 0; i <= n; i++) {
  for (let j = 0; j < 60; j++) {
    for (let l = 0; l < 60; l++) {
      let time = i + '' + j + '' + l;
      if (time.includes(k) || (i < 10 || j < 10 || l < 10) && k == 0) result++;
    }
  }
}
console.log(result);
