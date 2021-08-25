function solution(input) {
  const [N, M, V] = input.shift();

  let graph = Array.from(Array(N + 1), () => new Array(N + 1).fill(false));
  let visited = new Array(N + 1).fill(false);

  for (let i = 0; i < input.length; i++) {
    const [a, b] = input[i];
    graph[a][b] = true;
    graph[b][a] = true;
  }

  let stack = [];
  let result = [];
  let queue = [];

  function dfs(x) {
    if (visited[x]) {
      return;
    }
    visited[x] = true;
    stack.push(x);
    graph[x].map((v, i) => {
      if (v && !visited[i]) {
        dfs(i);
      }
    });
  }

  function bfs(x) {
    queue.push(x);
    while (queue.length > 0) {
      const start = queue.shift();
      visited[start] = true;
      result.push(start);
      graph[start].map((v, i) => {
        if (v && !visited[i]) {
          queue.push(i);
          visited[i] = true;
        }
      });
    }
  }

  dfs(V);
  visited = new Array(N + 1).fill(false);
  bfs(V);
  console.log(stack.join(' ') + '\n' + result.join(' '));
}

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line.split(' ').map(Number));
}).on('close', () => {
    solution(input);
    process.exit();
});
