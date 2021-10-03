const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(v => +v);
const T = input.shift();

function solution(input) {
  const DP = new Array(101);
  const result = [];
  
  DP[1] = 1;
  DP[2] = 1;
  DP[3] = 1;
  DP[4] = 2;
  DP[5] = 2;

  for (let i = 6; i <= 100; i++) {
    DP[i] = DP[i - 1] + DP[i - 5];
  }

  for (let i = 0; i < input.length; i++) {
    result.push(DP[input[i]]);
  }
    
  console.log(result.join('\n'));
}

solution(input);
