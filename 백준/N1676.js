function solution(input) {
  let num = input[0];
  let count = 0;

  function factorial(x) {
    let cur;
    for (let i = 2; i <= x; i++) {
      cur = i;
      while (cur % 5 === 0) {
        cur /= 5;
        count++;
      }
    }
  }
  factorial(num);
  console.log(count);
}

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(Number(line));
}).on('close', () => {
    solution(input);
    process.exit();
});
