// fs
let [m, n] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
if (m === 1) {
    m = 2;
}

let result = [];

for (let i = m; i <= n; i++) {
    let bol = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            bol = false;
            break;
        }
    }
    if (bol) {
        result.push(i);
    }
}
console.log(result.join("\n"));

// 에라토스테네스의 체
var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split(' ');
var m = Number(inputs[0]);
var n = Number(inputs[1]);
var arr = [];
var answer = '';
for (let i = 0; i <= n; i++) {
    arr.push(true);
}
arr[0] = false;
arr[1] = false;

for (let i = 2; i <= n; i++) {
    if (arr[i]) {
        for (let j = 2; j <= n/i; j++) {
            arr[i*j] = false;
        }
    }
}
for (let i = m; i <= n; i++) {
    if (arr[i]) answer += i + '\n'
}

console.log(answer.trim());

// readline
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', () => {
    let [m, n] = input[0].split(' ').map(Number);
    let result = [];
    
    if (m === 1) {
      m = 2;
    }
    
    for (let i = m; i <= n; i++) {
      let bol = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          bol = false;
          break;
        }
      }
      if (bol) {
        result.push(i);
      }
    }
    console.log(result.join("\n"));
    process.exit();
})
