let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let [a, b] = input[0].split(' ').map(x => Number(x));
let numbers = input[1].split(' ').map(x => Number(x));
let result = [];

for (let i = 0; i < a; i++) {
  if (b > numbers[i]){
    result.push(numbers[i]);
  }
}
console.log(result.join(' '))
