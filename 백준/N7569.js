const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(v => v.split(' ').map(v => +v));
const [M, N, H] = input.shift();

function solution(input) {
  const x1 = [-1, 1, 0, 0, 0, 0];
  const y1 = [0, 0, -1, 1, 0, 0];
  const z1 = [0, 0, 0, 0, -1, 1];
  const queue = [];
  let day = 0;
  let idx = 0;
  let count = 0;

  for (let i = 0; i < N * H; i++) {
    let h = Math.floor(i / N);
    for (let j = 0; j < M; j++) {
      if (input[i][j] === 1) {
        queue.push([i - h * N, j, h, day]);
      }

      if (input[i][j] === -1) {
        count++
      }
    }
  }

  while (queue.length > idx) {
    const [startY, startX, startZ, newDay] = queue[idx++];
    day = newDay;
    count++;

    for (let i = 0; i < 6; i++) {
      const [Y, X, Z] = [startY + y1[i], startX + x1[i], startZ + z1[i]];

      if (0 <= Y && Y < N && 0 <= X && X < M && 0 <= Z && Z < H && !input[Y + Z * N][X]) {
        queue.push([Y, X, Z, newDay + 1]);
        input[Y + Z * N][X] = 1;
      }
    }
  }

  if (count < M * N * H) {
    console.log(-1);
    return;
  }
  console.log(day)
}

solution(input);
