const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
  let n = Number(input)
let count = 0;

while (true) {
  let num = Math.floor(input/10) + (input%10);
  input = (input%10)*10 + (num%10);
  count++;
  if (n === input) {
    break;
  }
}
console.log(count);
  process.exit();
});
