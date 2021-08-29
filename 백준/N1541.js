// 깔끔하게 정리
function solution(input) {
    let arr = input.split('-').map(v => {
      return v.split('+').reduce((acc, cur) => acc + parseInt(cur), 0);
    });

    console.log(arr.slice(1).reduce((acc, cur) => acc - cur, arr[0]));
}

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = '';

rl.on('line', function (line) {
    input += line;
}).on('close', () => {
    solution(input);
    process.exit();
});

// if else
function solution(input) {
  let num = '';
  let save = 0;
  let minus = 0;

  let check = true;
  for (let i = 0; i < input.length; i++) {
    if (check && !isNaN(Number(input[i]))) {
      num += input[i];
    } else if (check && input[i] === '+') {
      save += Number(num);
      num = '';
    }
    if (check && input[i] === '-') {
      save += Number(num);
      num = '';
      check = false;
    }
    if (!check && !isNaN(Number(input[i]))) {
      num += input[i];
    } else if (!check && (input[i] === '+' || input[i] === '-')) {
      minus += Number(num);
      num = '';
    }

  }

  if (!check && num) {
    minus += Number(num);
  } else if (check && num) {
    save += Number(num);
  }
  console.log(save - minus);
}

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = '';

rl.on('line', function (line) {
    input += line;
}).on('close', () => {
    solution(input);
    process.exit();
});
