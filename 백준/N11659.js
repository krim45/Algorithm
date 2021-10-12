const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(v => v.split(' ').map(Number));
const sumArr = input[1];
for (let i = 1; i < sumArr.length; i++) {
  sumArr[i] += sumArr[i - 1];
}

function solution(input) {
  const result = [];

  for (let i = 2; i < input.length; i++) {
    const [start, end] = input[i];
    let answer = sumArr[end - 1] - (sumArr[start - 2] || 0);
    result.push(answer);
  }

  console.log(result.join('\n'));
}

solution(input);
