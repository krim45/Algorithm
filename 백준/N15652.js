// better
const [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let answer = '';
const board = [];

const rec = (idx, start) => {
  if (idx === M) {
    answer += board.join(' ') + '\n';
    return;
  }

  for (let cand = start; cand <= N; cand++) {
    board[idx] = cand;
    rec(idx + 1, cand);
  }
};

rec(0, 1);
console.log(answer);

// naive
const [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let answer = '';
const board = [];

const rec = (idx) => {
  if (idx === M) {
    answer += board.join(' ') + '\n';
    return;
  }
  for (let cand = 1; cand <= N; cand++) {
    if (idx > 0) {
      if (board[idx - 1] <= cand) {
        board[idx] = cand;
        rec(idx + 1);
      }
    } else {
      board[idx] = cand;
      rec(idx + 1);
    }
  }
};

rec(0);
console.log(answer);
