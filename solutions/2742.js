let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = Number(input[0]);
let answer = '';

for (let i = n; 1 <= i; i--) {
    answer += i + "\n";
}

console.log(answer);
