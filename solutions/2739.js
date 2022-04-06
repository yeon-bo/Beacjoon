let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = Number(input[0]);
for (let i = 1; i < 10; i++){
  let result = n*i
  console.log(n + " * " + i + " = " + result)
}
