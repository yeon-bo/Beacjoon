let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = input[0].split(' ');
for (let i = 1; i <= n; i++) {
  let [m, o, ...count] = input[i].split('');
  let result = [];
  for (let l = 0; l < count.length; l++) {
   for (let j = 0; j < m; j++) {
     result.push(count[l])
    }
  }
  console.log(result.join(''))
}
