let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let [a, b, c] = input[0].split(' ').map(Number);
let result = 0;

if ( a == b && b == c ) {
  result = 10000 + a * 1000;
} else if ( a == b || a == c || b == c ) {
  let x = 0;
  if (a == b || a == c) {
    x = a;
  } else x = b;
  result = 1000 + x * 100;
} else {
  let max = Math.max(a , b , c)
  result = max * 100
}

console.log(result);
