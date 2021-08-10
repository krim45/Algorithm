// fs
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
input.shift();
input.sort((a, b) => a - b);

console.log(input.join('\n'));

// readline
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line) {
    input.push(parseInt(line));
}).on('close', () => {
    input.shift();
    input.sort((a, b) => a - b);
    console.log(input.join('\n'));
    process.exit(); 
});
