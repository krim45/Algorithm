const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);
  let list = {};
  let result = [];

  for (let i = 1; i < input.length; i++) {
    list[input[i]] = (list[input[i]] || 0) + 1;
  }

  for (let key in list) {
    if (list[key] === 2) {
      result.push(key);
    }
  }
  result.sort();
  console.log(result.length + '\n' + result.join('\n'));
}
solution(input);
