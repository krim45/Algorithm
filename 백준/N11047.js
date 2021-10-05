let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, K] = input.shift().split(' ').map(v => +v);
input = input.map(v => +v);
let count = 0;

function solution(input) {
  for (let i = N - 1; i >= 0; i--) {
    if (input[i] <= K) {
      count += Math.floor(K / input[i]);
      K %= input[i];
    }
  }
  console.log(count);
}

solution(input);
