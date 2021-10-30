const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

function solution(input) {
  const hash = {};
  let result = '';

  for (let i = 1; i < N + 1; i++) {
    const [key, value] = input[i].split(' ');
    hash[key] = value;
  }

  for (let i = N + 1; i < input.length; i++) {
    result += hash[input[i]] + '\n';
  }

  console.log(result);
}

solution(input);
