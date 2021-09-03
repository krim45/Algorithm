const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function solution(input) {
  let [subin, sister] = input;
  let step = new Array(100001).fill(0);
  let queue = [];
  let cnt = 0;
  queue.push(subin);
  while (queue.length > cnt) {
    let start = queue[cnt++];
    if (start === sister) {
      break;
    }
    for (let i = 0; i < 3; i++) {
      let check;
      if (i === 0) {
        check = start - 1;
      } else if (i === 1) {
        check = start + 1;
      } else {
        check = start * 2;
      }
      if (check >= 0 && check <= 100000 && step[check] === 0) {
        queue.push(check);
        step[check] = step[start] + 1;
      }
    }
  }
  console.log(step[sister]);
}

solution(input);
