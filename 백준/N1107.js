function solution(input) {
  if (input[0][0] == 99) {
    console.log('1');
    return;
  } else if (input[0][0] == 100) {
    console.log('0');
    return;
  } else if (input[0][0] == 101) {
    console.log('1');
    return;
  } else if (input[0][0] == 102) {
    console.log('2');
    return;
  }
  
  let board = input[2];
  if (board === undefined) {
      board = [];
  }

  let num1 = input[0][0];
  let num2 = input[0][0];

  function check(num) {
    if (num === 0 && board.includes(num % 10)) {
      return false
    }
    while (num > 0) {
      if (board.includes(num % 10)) {
        return false
      }
      num = Math.floor(num / 10);
    }
    return true;
  }

  while (num1 < 999999) {
    if (check(num1)) {
      break;
    }
    num1++;
  }

  while (num2 >= -999999) {
    if (num2 >= 0 && check(num2)) {
      break;
    }
    num2--;
  }
  let min1 = String(num1).length + Math.abs(input[0][0] - num1);
  let min2 = String(num2).length + Math.abs(input[0][0] - num2);
  console.log(Math.min(min1, min2, Math.abs(input[0][0] - 100)));
}

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(v => v.split(' ').map(Number));
solution(input);
