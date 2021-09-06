const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  let N = +input[0];
  let board = input.slice(1).map(v => v.split(' ').map(Number));
  let result = { '-1': 0, '0': 0, '1': 0 };

  function check(startY, endY, startX, endX) {
    for (let i = startY; i < endY; i++) {
      for (let j = startX; j < endX; j++) {
        if (board[i][j] !== board[startY][startX]) {
          let firstX = startX + (endX - startX) / 3;
          let secondX = startX + 2 * (endX - startX) / 3;

          let firstY = startY + (endY - startY) / 3;
          let secondY = startY + 2 * (endY - startY) / 3

          check(startY, firstY, startX, firstX);
          check(startY, firstY, firstX, secondX);
          check(startY, firstY, secondX, endX);

          check(firstY, secondY, startX, firstX);
          check(firstY, secondY, firstX, secondX);
          check(firstY, secondY, secondX, endX);

          check(secondY, endY, startX, firstX);
          check(secondY, endY, firstX, secondX);
          check(secondY, endY, secondX, endX);
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
