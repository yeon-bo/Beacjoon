let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = Number(input[0]);

for (let i = 1; i < n + 1; i++) {
  let m = input[i];
  let result= 0;
  let count = 0;
  for (let j = 0; j <= m.length; j++) {
    if( m[j] == "O" ) {
      if ( j == 0 ){
        result++;
        count++;
      }else if (m[j -  0] == m[j]) {
        count++;
        result += count;
      } else {
        result++;
        count = 0;
      }
    } else {
      count = 0;
    }
  }
  console.log(result)
}
