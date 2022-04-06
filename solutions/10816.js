let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]); // 데이터 개수
let data = input[1].split(' ').map(Number);
let m = Number(input[2]); // 쿼리의 개수
let query = input[3].split(' ').map(Number);

// 정렬된 순서를 유지하면서 배열에 삽입할 가장 왼쪽 인덱스 반환
function lowerBound(arr, target, start, end) {
  while (start < end) {
  let mid = parseInt((start + end) / 2);
  if (arr[mid] >= target) end = mid; // 최대한 왼쪽으로 이동하기
  else start = mid + 1;
  }
  return end;
}
// 정렬된 순서를 유지하면서 배열에 삽입할 가장 오른쪽 인덱스 반환
function upperBound(arr, target, start, end) {
  while (start < end) {
  let mid = parseInt((start + end) / 2);
  if (arr[mid] > target) end = mid;
  else start = mid + 1; // 최대한 오른쪽으로 이동하기
  }
  return end;
}

function countByRange(arr, leftValue, rightValue) {
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
  return rightIndex - leftIndex;
}

data.sort((a, b) => a - b);
let answer='';
for (let x of query) { // 하나씩 쿼리를 확인하며
  let cnt = countByRange(data, x, x);
  answer += cnt + ' ';
}
console.log(answer);
