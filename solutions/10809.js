let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');
let num = input[0].split('');
let eng = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let result = [];
for (let number of eng) {
 let m = num.findIndex(e => e == number); 
 result.push(m);
}
console.log(result.join(' '))
