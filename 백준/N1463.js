function solution(input) {
  let num = Number(input[0]);
  let arr = new Array(num + 1).fill(0);

  for (let i = 2; i <= num; i++) {
    arr[i] = arr[i - 1] + 1;

    if (i % 2 === 0) {
      arr[i] = Math.min(arr[i], arr[i / 2] + 1)
    }
    if (i % 3 === 0) {
      arr[i] = Math.min(arr[i], arr[i / 3] + 1)
    }
  }

  console.log(arr[num]);
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
