const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function solution(input) {
  const dp = new Array(11);
  let result = [];

  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let i = 4; i <= 10; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  for (let i = 1; i < input.length; i++) {
    result.push(dp[input[i]]);
  }

  console.log(result.join('\n'));
}

solution(input);
