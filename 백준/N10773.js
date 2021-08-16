// fs
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let result = [];

for (let i = 1; i < input.length; i++) {
    if (input[i] == 0) {
        result.pop();
    } else {
        result.push(input[i]);
    }
}

let sum = 0;
for (let i = 0; i < result.length; i++) {
    sum += result[i];
}

console.log(sum);
