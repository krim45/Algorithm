// dfs
function solution(input) {
  const N = +input.shift();
  input = input.map(v => v.split('').map(Number));
    
  const x1 = [-1, 1, 0, 0];
  const y1 = [0, 0, -1, 1];

  let result = [];
  let house;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (input[i][j] === 1) {
        house = 0;
        dfs(i, j);
        result.push(house);
      }
    }
  }

  function dfs(y, x) {
    input[y][x] = 0;
    house++;
    for (let i = 0; i < 4; i++) {
      const checkX = x + x1[i];
      const checkY = y + y1[i];
      if (checkX >= 0 && checkX < N && checkY >= 0 && checkY < N) {
        if (input[checkY][checkX] === 1) {
          dfs(checkY, checkX);
        }
      }
    }
  }
  result.sort((a,b) => a - b);
  console.log(result.length + '\n' + result.join('\n'));
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


// bfs
function solution(input) {
  const N = +input.shift();
  input = input.map(v => v.split('').map(Number));
    
  const x1 = [-1, 1, 0, 0];
  const y1 = [0, 0, -1, 1];

  let result = [];
  let queue = [];
  let house;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (input[i][j] === 1) {
        house = 0;
        bfs(i, j);
        result.push(house);
      }
    }
  }

  function bfs(y, x) {
    queue.push([y, x]);
    while (queue.length > 0) {
      let [startY, startX] = queue.shift();
      input[startY][startX] = 0;
      house++;
      for (let i = 0; i < 4; i++) {
        let checkX = startX + x1[i];
        let checkY = startY + y1[i];
        if (checkX >= 0 && checkX < N && checkY >= 0 && checkY < N) {
          if (input[checkY][checkX] === 1) {
            queue.push([checkY, checkX]);
            input[checkY][checkX] = 0;
          }
        }
      }
    }
  }
    
  result.sort((a, b) => a - b);
  console.log(result.length + '\n' + result.join('\n'));
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
