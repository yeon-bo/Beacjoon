let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  let [m, ...count] = input[i].split(' ').map(Number);
  let counter = 0;
  let age= (count.reduce((a, b) => a+b)) / m;
  for (let j = 0; j <= count.length; j++) {
     if (count[j] > age) {
      counter++;
    } 
  }
  let result = counter / m * 100
  console.log(result.toFixed(3)+"%")
}
