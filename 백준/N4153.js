// fs
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let result = [];
    
for (let i = 0; i < input.length - 1; i++) {
    let arr = input[i].split(' ').map(Number);
    arr.sort((a, b) => a - b);
    if (Math.pow(arr[0], 2) + Math.pow(arr[1], 2) === Math.pow(arr[2], 2)) {
        result.push('right');
    } else {
        result.push('wrong');
    }
}
    
console.log(result.join('\n'));

// readline
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', () => {
    let result = [];
    
    for (let i = 0; i < input.length - 1; i++) {
        let arr = input[i].split(' ').map(Number);
        arr.sort((a, b) => a - b);
        if (Math.pow(arr[0], 2) + Math.pow(arr[1], 2) === Math.pow(arr[2], 2)) {
            result.push('right');
        } else {
            result.push('wrong');
        }
    }
    
    console.log(result.join('\n'));
    process.exit();
});
