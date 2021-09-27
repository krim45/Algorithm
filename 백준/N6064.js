let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(v => v.split(' ').map(Number));
const T = +input.shift();

function gcd(x, y) {
  if (x % y === 0) {
    return y
  }
  return gcd(y, x % y)
}

function lcm(x, y) {
  return (x * y) / gcd(x, y)
}

function solution(input) {
  let result = [];
  let year;

  for (let i = 0; i < T; i++) {
    let [M, N, x, y] = input[i];
    const maxYear = lcm(M, N);
    let a = x;
    let b = x % N;
    y %= N;
    year = x;

    while (b !== y) {
      b += M;
      year += M;
      if (b >= N) {
        b %= N;
      }

      if (year > maxYear) {
        result.push(-1);
        break;
      }
    }

    if (result.length === i) {
      result.push(year)
    }
  }
  console.log(result.join('\n'));
}

solution(input);
