let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const N = input.shift();
  input = input.map(v => v.split(' ').map(Number));

  let idx = 0;
  input.sort((a, b) => {
    return a[1] - b[1] === 0 ? a[0] - b[0] : a[1] - b[1];
  });
  let result = new Array(N);
  result[0] = input[0];
  for (let i = 1; i < input.length; i++) {
    let [start, end] = input[i];

    if (start >= result[idx][1]) {
      idx++;
      result[idx] = input[i];
    }
  }
  console.log(result.length);
}

solution(input);
