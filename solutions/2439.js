let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = Number(input[0]);

let result = '';
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    result += " "
  }
  for (let k = 0; k <= i; k++) {
    result += "*";
  }
  result += "\n";
}
console.log(result)
