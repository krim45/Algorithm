const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(v => v.split(' ').map(Number));

function solution(input) {
  const [N, M] = input[0];
  const graph = new Array(N + 1).fill(0).map(el => new Array(N + 1).fill(0));
  const visited = new Array(N + 1).fill(false);
  let count = 0;

  for (let i = 1; i < input.length; i++) {
    const [y, x] = input[i];
    graph[y][x] = 1;
    graph[x][y] = 1;
  }

  const dfs = (num) => {
    if (visited[num]) return;
    visited[num] = true;

    for (let i = 0; i <= N; i++) {
      if (graph[num][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      count++;
      dfs(i);
    }
  }

  console.log(count);
  return;
}

solution(input);
