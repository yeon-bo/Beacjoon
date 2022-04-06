let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');
let line = input[0];

if ( line % 4 === 0) {
  if ( line % 100 === 0) {
    if ( line % 400 === 0) {
    console.log(1)
    }else {
  console.log(0)
    }
  } else {
  console.log(1)
}
} else {
  console.log(0)
}
