let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input.shift();
input = input[0].split(' ').map(Number);

function solution(input) {
  let LIS = [input[0]];
  let idx = [0];
  let answer = '';
    
  for (let i = 1; i < N; i++) {
    const target = input[i];
    if (LIS[LIS.length - 1] < target) {
      idx.push(LIS.length);
      LIS.push(target);
    }
    else {
      let min = 0;
      let max = LIS.length - 1;
      let mid = Math.floor((min + max) / 2);

      while (min < max) {
        mid = Math.floor((min + max) / 2);

        if (LIS[mid] >= target) {
          max = mid;
        } else if (LIS[mid] < target) {
          min = mid + 1;
        }
      }
      idx.push(min);
      LIS[min] = target;
    }
  };
  
  let len = LIS.length - 1
  for (let i = idx.length - 1; i >= 0; i--) {
    if (idx[i] === len) {
      answer = ' ' + input[i] + answer;
      len--;
    }
  }
  console.log(LIS.length);
  console.log(answer.trim());
}

solution(input);
