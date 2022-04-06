let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');
let line = input[0];

if ( line >= 90 ) {
 console.log("A")
} else if ( line >= 80 ) {
  console.log("B")
} else if ( line >= 70) {
  console.log("C")
} else if ( line >= 60) {
  console.log("D")
} else {
  console.log("F")
}
