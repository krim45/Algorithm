const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
function solution(input) {
  const atm = input[1].split(' ').map(Number).sort((a, b) => a - b);
  let result = [];
  let sum = 0;

  for (let i = 0; i < atm.length; i++) {
    sum += atm[i];
    result.push(sum);
  }

  console.log(result.reduce((acc, cur) => acc + cur, 0));
}

solution(input);
