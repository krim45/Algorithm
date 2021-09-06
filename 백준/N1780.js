const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  let N = +input[0];
  let board = input.slice(1).map(v => v.split(' ').map(Number));
  let result = { '-1': 0, '0': 0, '1': 0 };

  function check(x1, y1, x2, y2) {
    for (let i = x1; i < y1; i++) {
      for (let j = x2; j < y2; j++) {
        if (board[i][j] !== board[x1][x2]) {
          let firstX = x2 + (y2 - x2) / 3;
          let secondX = x2 + 2 * (y2 - x2) / 3;
          let firstY = x1 + (y1 - x1) / 3;
          let secondY = x1 + 2 * (y1 - x1) / 3

          check(x1, firstY, x2, firstX);
          check(x1, firstY, firstX, secondX);
          check(x1, firstY, secondX, y2);

          check(firstY, secondY, x2, firstX);
          check(firstY, secondY, firstX, secondX);
          check(firstY, secondY, secondX, y2);

          check(secondY, y1, x2, firstX);
          check(secondY, y1, firstX, secondX);
          check(secondY, y1, secondX, y2);
          return;
        }
      }
    }
    result[board[x1][x2]]++;
    return true;
  }
  check(0, N, 0, N);
  console.log(result['-1'] + '\n' + result['0'] + '\n' + result['1']);
}

solution(input);
