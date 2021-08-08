// fs 숫자로
const N = +require('fs').readFileSync('/dev/stdin').toString().trim();
let min = 0;

for (let i = N; i >= 1; i--) {
  let n = i;
  let num = 0;

  while (n > 0) {
    num += n % 10;
    n = Math.floor(n / 10);
  }

  num += i;

  if (num === N) min = i;
}

console.log(min);

// fs 문자열
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

const N = parseInt(input.join(''));
let count = parseInt(input.join(''));

function check(n) {
  let arr = n.toString().split('');
  let num = n + arr.reduce((a, b) => a + b * 1, 0);

  if (num === N) {
    return n
  }
}

let min;

while (count > 0) {
  if (check(count)) {
    min = check(count);
  }
  count--;
}

if (min === undefined) {
  min = 0;
}

console.log(min);
