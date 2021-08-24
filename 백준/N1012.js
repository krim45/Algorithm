function solution(input) {
  const T = input.shift();
  let result = [];
  let idx = 0;
  let x1 = [-1, 1, 0, 0];
  let y1 = [0, 0, -1, 1]

  for (let i = 0; i < T; i++) {
    let node = 0;
    let arr = [];
    let [M, N, K] = input[idx].split(' ').map(Number);

    function dfs(x, y) {
      for (let k = 0; k < 4; k++) {
        let checkX = x + x1[k];
        let checkY = y + y1[k];
        if (checkX >= 0 && checkX < M && checkY >= 0 && checkY < N) {
          if (arr[checkY][checkX] === 1) {
            arr[checkY][checkX] = 0;
            dfs(checkX, checkY);
          }
        }
      }
    }

    for (let i = 0; i < N; i++) {
      let arr1 = [];
      for (let j = 0; j < M; j++) {
        arr1.push(0);
      }
      arr.push(arr1);
    }

    for (let i = idx + 1; i <= idx + K; i++) {
      const [a, b] = input[i].split(' ').map(Number);
      arr[b][a] += 1;
    }

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (arr[i][j] === 1) {
          dfs(j, i);
          node++;
        }
      }
    }

    result.push(node);
    idx += K + 1;
  }
  console.log(result.join('\n'));
}

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', () => {
    solution(input);
    process.exit();
});
