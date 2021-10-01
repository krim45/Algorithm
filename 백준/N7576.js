const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(v => v.split(' ').map(v => +v));
const [M, N] = input.shift();

function solution(input) {
  const visited = Array.from(Array(N), () => new Array(M).fill(false));
  const x1 = [-1, 1, 0, 0];
  const y1 = [0, 0, -1, 1];
  const queue = [];
  let day = 0;
  let idx = 0;
  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (input[i][j] === 1 && !visited[i][j]) {
        visited[i][j] = true;
        queue.push([i, j, day]);
      }

      if (input[i][j] === -1 && !visited[i][j]) {
        visited[i][j] = true;
        count++
      }
    }
  }

  while (queue.length > idx) {
    const [startY, startX, newDay] = queue[idx++];
    day = newDay;
    count++;

    for (let i = 0; i < 4; i++) {
      const [Y, X] = [startY + y1[i], startX + x1[i]];
      if (0 <= Y && Y < N && 0 <= X && X < M && !visited[Y][X]) {
        queue.push([Y, X, newDay + 1]);
        visited[Y][X] = true;
      }
    }
  }

  if (count !== M * N) {
    console.log(-1);
    return;
  }
  console.log(day)
}

solution(input);
