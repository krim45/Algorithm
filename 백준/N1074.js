function solution(input) {
  let [N, r, c] = input;
  let count = 0;

  function zWay(y, x) {
    if (N > 0) {
      N = N - 1;
      if (y < Math.pow(2, N) && x < Math.pow(2, N)) {
        // 1
        count += 0
      }
      else if (y < Math.pow(2, N) && x >= Math.pow(2, N)) {
        // 2
        count += 1 * Math.pow(4, N);
        x -= Math.pow(2, N)
      }
      else if (y >= Math.pow(2, N) && x < Math.pow(2, N)) {
        // 3
        count += 2 * Math.pow(4, N);
        y -= Math.pow(2, N)

      }
      else if (y >= Math.pow(2, N) && x >= Math.pow(2, N)) {
        // 4
        count += 3 * Math.pow(4, N);
        x -= Math.pow(2, N)
        y -= Math.pow(2, N)
      }
      return zWay(y, x)
    }
    return count;
  }
  console.log(zWay(r, c));
}

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ').map(Number);
}).on('close', () => {
    solution(input);
    process.exit();
});
