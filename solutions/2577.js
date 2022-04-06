let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let num = input[0]*input[1]*input[2];
let numbers = num.toString().split('').map(x => Number(x));

for (let j = 0; j < 10; j++) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) { 
    if (numbers[i] === j) {count++;}
  }
  console.log(count)
}
