// fs
const [x, y, w, h] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const min = Math.min(x, y, w - x, h - y);

console.log(min);


// readline
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = []

rl.on('line', function(line) {
    input = line.split(' ').map(Number);
}).on('close', () => {
    const [x, y, w, h] = input;

    const min = Math.min(x, y, w - x, h - y);
    console.log(min);

    process.exit();
})
