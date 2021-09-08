const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const N = input[0];

function solution(input) {
  let stairs = input;
  let DP = new Array(N + 1);

  DP[0] = 0;
  DP[1] = stairs[1];
  DP[2] = DP[1] + stairs[2];
  DP[3] = Math.max(stairs[1], stairs[2]) + stairs[3];

  for (let i = 3; i < N + 1; i++) {
    DP[i] = Math.max(DP[i - 2] + stairs[i], DP[i - 3] + stairs[i - 1] + stairs[i]);
  }

  console.log(DP[N]);
}

solution(input);
