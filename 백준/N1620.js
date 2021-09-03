function solution(input) {
  const [N, M] = input.shift().split(' ').map(Number)
  let result = [];
  let list = {};


  for (let j = 0; j < N; j++) {
    list[input[j]] = j + 1;
  }

  for (let i = N; i < input.length; i++) {
    if (isNaN(Number(input[i]))) {
      result.push(list[input[i]]);
    } else {
      result.push(input[Number(input[i]) - 1]);
    }
  }

  console.log(result.join('\n'));
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);
