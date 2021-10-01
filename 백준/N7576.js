const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(v => v.split(' ').map(v => +v));
const [M, N] = input.shift();

function solution(input) {
  const graph = Array.from(Array(N), () => new Array(M).fill(false));
  const x1 = [-1, 1, 0, 0];
  const y1 = [0, 0, -1, 1];
  const queue = [];
  let day = 0;
  let count = 0;
  let tmp = 1000001;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (input[i][j] === 1) {
        graph[i][j] = true;
        count++
      }
      if (input[i][j] === -1) {
        count++
      }
    }
  }

  function bfs(y, x) {
    graph[y][x] = true;
    queue.push([y, x]);

    while (queue.length > 0) {
      const start = queue.shift();
      for (let i = 0; i < 4; i++) {
        const [Y, X] = [y + y1[i], x + x1[i]];

        if (0 <= Y && Y < N && 0 <= X && X < M && input[Y][X] !== -1 && graph[Y][X] === false) {
          graph[Y][X] = true;
          queue.push([Y, X]);
          count++
        }
      }
    }
  }

  while (count < M * N) {
    tmp = count;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (input[i][j] === 1) {
          bfs(i, j);
        }
      }
    }
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (graph[i][j] === true && input[i][j] !== 1) {
          input[i][j] = 1;
        }
      }
    }
    day++;

    if (tmp === count) {
      console.log(-1);
      return;
    }
  }
  console.log(day);
}

solution(input);
