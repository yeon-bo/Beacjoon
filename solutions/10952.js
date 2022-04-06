let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let line = 0

while (true) {
  let [a, b] = input[line].split(' ').map(x => Number(x));
  if (a == 0 && b == 0) break;
  console.log(a + b);
  line++;
}
