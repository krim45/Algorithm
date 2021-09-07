const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  let [N, M] = input.shift().split(' ').map(Number);
  let graph = input.map(v => v.split('').map(Number));
  let visited = Array.from(Array(N), () => new Array(M).fill(false));
  let step = Array.from(Array(N), () => new Array(M).fill(0));
  step[0][0] = 1;
    
  let x1 = [-1, 1, 0, 0];
  let y1 = [0, 0, -1, 1];
  let queue = [];

  function bfs(y, x) {
    queue.push([y, x]);
      
    while (queue.length > 0) {
      let [startY, startX] = queue.shift().map(Number);
      visited[startY][startX] = true;
        
      for (let i = 0; i < 4; i++) {
        let Y = startY + y1[i];
        let X = startX + x1[i];
          
        if (0 <= Y && Y < N && 0 <= X && X < M) {
          if (graph[Y][X] === 1 && !visited[Y][X]) {
            queue.push([Y, X]);
            step[Y][X] = step[startY][startX] + 1;
            visited[Y][X] = true;
          }
        }
      }
    }
  }
  bfs(0, 0);
  console.log(step[N - 1][M - 1]);
}

solution(input);
