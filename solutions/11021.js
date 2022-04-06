let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  let [a, b] = input[i].split(' ').map(x => Number(x));
    console.log("Case #"+i+": " + (a+b));
}
