const [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const board = [];
const used = new Array(N + 1).fill(false);
let answer = '';

const rec = (idx) => {
  if (idx === M) {
    answer += board.join(' ') + '\n';
    return;
  }
  
  for (let cand = 1; cand <= N; cand++) {
    if (!used[cand]) {
      board[idx] = cand;
      used[cand] = true;
      rec(idx + 1);
      board[idx] = 0;
      used[cand] = false;
    }
  }
};

rec(0);
console.log(answer);
