const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = input.shift();

function solution(input) {
  const result = [];

  for (let i = 0; i < input.length; i++) {
    if (!Number.isNaN(+input[i])) {
      const obj = {};
      let count = 1;

      for (let j = i + 1; j < +input[i] + i + 1; j++) {
        const [name, type] = input[j].split(' ');
        if (obj[type]) {
          obj[type].push(name);
        } else {
          obj[type] = [name];
        }
      }

      for (let key in obj) {
        count *= (obj[key].length + 1);
      }

      result.push(count - 1);
    }
  }
  console.log(result.join('\n'));
}

solution(input);
