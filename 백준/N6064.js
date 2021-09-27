const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(v => v.split(' ').map(v => +v));
const T = +input.shift();

function solution(input) {
  const result = [];
  let year;

  for (let i = 0; i < input.length; i++) {
    const [M, N, x, y] = input[i];
    let [a, b] = [1, 1];
    year = 1;

    while (a !== M || b !== N) {
      if (a < M) {
        a++;
      } else {
        a = 1;
      }

      if (b < N) {
        b++;
      } else {
        b = 1;
      }
      year++;

      if (a === x && b === y) {
        result.push(year);
        break;
      }
    }

    if (result.length === i) {
      result.push(-1);
    }
  }
  console.log(result.join('\n'));
}

solution(input);
