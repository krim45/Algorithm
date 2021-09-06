const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  let N = +input[0];
  let board = input.slice(1).map(v => v.split('').map(Number));
  let result = '';

  function check(startY, endY, startX, endX) {
    for (let i = startY; i < endY; i++) {
      for (let j = startX; j < endX; j++) {
        if (board[i][j] !== board[startY][startX]) {
          let midX = startX + (endX - startX) / 2;
          let midY = startY + (endY - startY) / 2;
          result += '('
          check(startY, midY, startX, midX);
          check(startY, midY, midX, endX);
          check(midY, endY, startX, midX);
          check(midY, endY, midX, endX);
          result += ')'
          return;
        }
      }
    }
    result += board[startY][startX];
    return;
  }
  check(0, N, 0, N);
  console.log(result);
}

solution(input);
