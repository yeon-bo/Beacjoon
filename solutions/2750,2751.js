let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i])
}
arr.sort((a, b) => a - b);

for (let i of arr ) {
 console.log(i); 
}

// 방식은 똑같으나 파일을 읽어오는것이 

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i])
}
arr.sort((a, b) => a - b);

for (let i of arr ) {
 console.log(i); 
}
