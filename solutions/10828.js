let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]); // 연산 횟수
let stack = []; // 스택 초기화

let answer = '';

for (let i = 1; i <= n; i++) {
  let line = input[i].split(' ');
  if (line[0] == 'push') {
    stack.push(Number(line[1]));
  } 
  else if (line[0] == 'pop') {
    if (stack.length == 0) answer += -1 + '\n';
    else answer += stack.pop() + '\n';
  } 
  else if (line[0] == 'size') {
    answer += stack.length + '\n';
  } 
  else if (line[0] == 'empty') {
    if (stack.length == 0) answer += 1 + '\n';
    else answer += 0 + '\n';
  } 
  else if (line[0] == 'top') {
    if (stack.length == 0) answer += -1 + '\n';
    else answer += stack[stack.length - 1] + '\n';
  }
}

console.log(answer)
