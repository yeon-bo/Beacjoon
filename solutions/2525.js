let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let [t, m] = input[0].split(' ').map(Number);
let time = Number(input[1])
let n = 0;

if (m + time >= 60 ) {
  n = Math.floor((m + time) / 60);
  m = (m + time) % 60;
  t += n;
  if (t >= 24) {
    t -= 24;
  }
} else m += time;


console.log(t + ' ' + m);
