let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let data = input[0];
let groups = data.split('-'); // - 연산자로 그룹을 나누기

// = 연산자로 묶인 하나의 그룹의 정수 합을 계산
function processGroup(value) {
  return value.split('+').map(Number).reduce((a, b)=> a + b);
}

let result = processGroup(groups[0]); // 첫 그룹만 양수
for (let i = 1; i < groups.length; i++) { // 두 번째부터는 음수
  result -= processGroup(groups[i]);
}

console.log(result);
