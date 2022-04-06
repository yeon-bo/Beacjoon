let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let i = 0;
while (i < input.length - 1 ) {
  let [a, b] = input[i].split(' ').map(x => Number(x));
  console.log(a + b);
  i++;
}
