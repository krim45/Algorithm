const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', () => {
  const N = +input.shift();
  input = input.map(v => v.split(''));
  const inputRed = JSON.parse(JSON.stringify(input)).map(v => v.map(x => {
    if (x === 'G') {
      return 'R'
    }
    return x
  }));
  const vistied1 = Array.from(Array(N), () => new Array(N).fill(false));
  const vistied2 = Array.from(Array(N), () => new Array(N).fill(false));
  const queue1 = [];
  const queue2 = [];
  const x1 = [-1, 1, 0, 0];
  const y1 = [0, 0, -1, 1];
  let distruct1 = 0;
  let distruct2 = 0;
  let idx1 = 0;
  let idx2 = 0;

  const solution = (input) => {
    const bfs1 = (y, x) => {
      const color = input[y][x];
      queue1.push([y, x]);
      vistied1[y][x] = true;
      distruct1++;
      
      while (queue1.length > idx1) {
        let [startY, startX] = queue1[idx1++];
        
        for (let i = 0; i < 4; i++) {
          let [Y, X] = [startY + y1[i], startX + x1[i]];
          
          if (0 <= Y && Y < N && 0 <= X && X < N && !vistied1[Y][X] && color === input[Y][X]) {
            vistied1[Y][X] = true;
            queue1.push([Y, X]);
          }
        }
      }
    }
    
    const bfs2 = (y, x) => {
      const color = inputRed[y][x];
      queue2.push([y, x]);
      vistied2[y][x] = true;
      distruct2++;

      while (queue2.length > idx2) {
        let [startY, startX] = queue2[idx2++];
        
        for (let i = 0; i < 4; i++) {
          let [Y, X] = [startY + y1[i], startX + x1[i]];
          
          if (0 <= Y && Y < N && 0 <= X && X < N && !vistied2[Y][X] && color === inputRed[Y][X]) {
            vistied2[Y][X] = true;
            queue2.push([Y, X]);
          }
        }
      }
    }

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (!vistied1[i][j]) {
          bfs1(i, j);
        }
        if (!vistied2[i][j]) {
          bfs2(i, j);
        }
      }
    }
      
    console.log(distruct1 + ' ' + distruct2);
  }
    
  solution(input);
  process.exit();
});
