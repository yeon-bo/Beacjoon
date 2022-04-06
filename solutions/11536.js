const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', function(line) {
  input.push(line);
}).on("close", function() {
  solution(input);
  process.exit();
});

function solution(input) {
  let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i])
}
let increasing = false;
let decreasing = false;

for (let i = 0; i < n - 1; i++) {
 if (arr[i] < arr[i + 1]) {
    increasing = true;
  } else if (arr[i] > arr[i + 1]) {
    decreasing = true;
  } 
}

increasing == true && decreasing == true ? console.log('NEITHER') : increasing == true ? console.log('INCREASING') : console.log('DECREASING')
}
