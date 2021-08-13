// fs
const [A, B, V] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(Math.ceil((V-B)/(A-B)));

// readline
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line) {
    input = line.split(' ').map(Number);
}).on('close', () => {
    const [A, B, V] = input;
    
    console.log(Math.ceil((V-B)/(A-B)));
    process.exit(); 
});
