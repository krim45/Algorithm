const [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let answer = '';
const board = [];

const rec = (idx) => {
  if (idx === M) {
    answer += board.join(' ') + '\n';
  } else {
    for (let cand = 1; cand <= N; cand++) {
      board[idx] = cand;
      rec(idx + 1);
      board[idx] = 0;
    }
  }
};

rec(0);
console.log(answer);
