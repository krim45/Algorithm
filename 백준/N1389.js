let input = `5 5
1 3
1 4
4 5
4 3
3 2`;

input = input.split('\n');

function solution(input) {
  let arr = input.map(v => v.trim().split(' ').map(Number));
  const [N, M] = arr.shift();
  const graph = Array.from(Array(N + 1), () => new Array(N + 1).fill(false));
  const visited = new Array(N + 1).fill(false);

  for (let i = 0; i < N; i++) {
    const [a, b] = arr[i];
    graph[a][b] = true;
    graph[b][a] = true;
  }

  let count = 1;
  let result = [];
  let kevin = [];
  let queue = [];
  let num = 1;

  function bfs(x) {
    queue.push(x);
    while (queue.length > 0) {
      for (let j = 0; j < 5; j++) {
        const start = queue.shift();
        visited[start] = true;
        count++;
        if (graph[start]) {
          graph[start].map((v, i) => {
            if (v && !visited[i]) {
              queue.push(i);
              kevin.push(count);
              visited[i] = true;
            }
          });
        }
        num = queue.length;
      }
    }
  }
  bfs(1)
  console.log(kevin);
}

solution(input);
