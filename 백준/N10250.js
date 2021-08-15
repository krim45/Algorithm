// fs
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let result = [];

for (let i = 1; i < input.length; i++) {
    const [H, W, N] = input[i].split(' ').map(Number);
    let level = '';
    let room = Math.ceil(N / H);

    if (N % H === 0) {
        level += H;
    } else {
        level += N % H;
    }

    if (room < 10) {
        room = '0' + room;
    }
    result.push(parseInt(level + room));
}

console.log(result.join('\n'));

// readline
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', () => {
    let result = [];
    
    for (let i = 1; i < input.length; i++) {
        const [H, W, N] = input[i].split(' ').map(Number);
        let level = '';
        let room = Math.ceil(N / H);
        
        if (N % H === 0) {
            level += H;
        } else {
            level += N % H;
        }
        
        if (room < 10) {
            room = '0' + room;
        }
        result.push(parseInt(level + room));
    }
    
    console.log(result.join('\n'));
    process.exit();
});
