function solution(input) {
  let [N, M, B] = input.shift();
  let max = 0;
  let min = 256;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (max < input[i][j]) {
        max = input[i][j];
      }
      if (min > input[i][j]) {
        min = input[i][j];
      }
    }
  }

  let height = min;
  let minTime = Number.MAX_VALUE;
  let ground = 0;

  while (height <= max) {
    let time = 0;
    let inven = B;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (height > input[i][j]) {
          inven = inven - (height - input[i][j]);
          time = time + (height - input[i][j]);
        }
        else if (height < input[i][j]) {
          inven = inven + (input[i][j] - height);
          time = time + (input[i][j] - height) * 2;
        }
      }
    }
    if (inven >= 0) {
        if (minTime > time) {
          minTime = time;
          ground = height;
        }
        else if (minTime === time) {
          if (ground < height) {
            ground = height;
          }
        }
    } else {
        break;
    }
    
    height++;
  }

  console.log(`${minTime} ${ground}`)
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
