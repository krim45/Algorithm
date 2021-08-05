// fs
const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const stack = [];
const check = [];
let result = "";
let arrIdx = 0;
let i = 1;

while (arrIdx < n) {
    if (arr[arrIdx] == stack[stack.length - 1]) {
        check.push(stack.pop());
        result += '-' + '\n';
        arrIdx++;
    } else {
        if (i > n){
            result = 'NO'
            break;
        }
        stack.push(i);
        result += '+' + '\n';
        i++;
    }
}

console.log(result);

// readline
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', () => {
    const [n, ...arr] = input;
    
    const stack = [];
    const check = [];
    let result = "";
    let arrIdx = 0;
    let i = 1;

    while (arrIdx < n) {
      if (arr[arrIdx] == stack[stack.length - 1]) {
        check.push(stack.pop());
        result += '-' + '\n';
        arrIdx++;
      } else {
        if (i > n){
            result = 'NO'
            break;
        }
        stack.push(i);
        result += '+' + '\n';
        i++;
     }
    }

    console.log(result);
    
    process.exit();
})
