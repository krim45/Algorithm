let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input.shift();
input = input[0].split(' ').map(Number);

function solution(input) {
  let LIS = [input[0]];

  for (let i = 1; i < N; i++) {
    const target = input[i];
    if (LIS[LIS.length - 1] < target) {
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
      LIS[min] = target;
    }
  };
  console.log(LIS.length);
}

solution(input);
