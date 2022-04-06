let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]); // 연산 횟수

class Queue {
  constructor() {
  this.items = {};
  this.headIndex = 0;
  this.tailIndex = 0;
  }
  enqueue(item) {
  this.items[this.tailIndex] = item;
  this.tailIndex++;
  }
  dequeue() {
  const item = this.items[this.headIndex];
  delete this.items[this.headIndex];
  this.headIndex++;
  return item;
  }
  peek() {
  return this.items[this.headIndex];
  }
  back() {
    return this.items[this.tailIndex - 1];
  }
  getLength() {
  return this.tailIndex - this.headIndex;
  }
  }

let queue = new Queue(); // 큐 초기화

let answer = '';

for (let i = 1; i <= n; i++) {
  let line = input[i].split(' ');
  if (line[0] == 'push') {
    queue.enqueue(Number(line[1]));
  } 
  else if (line[0] == 'pop') {
    if (queue.getLength() == 0) answer += -1 + '\n';
    else answer += queue.dequeue() + '\n';
  } 
  else if (line[0] == 'size') {
    answer += queue.getLength() + '\n';
  } 
  else if (line[0] == 'empty') {
    if (queue.getLength() == 0) answer += 1 + '\n';
    else answer += 0 + '\n';
  } 
  else if (line[0] == 'front') {
    if (queue.getLength() == 0) answer += -1 + '\n';
    else answer += queue.peek() + '\n';
  }
  else if (line[0] == 'back') {
    if (queue.getLength() == 0) answer += -1 + '\n';
    else answer += queue.back() + '\n';
  }
}

console.log(answer)
