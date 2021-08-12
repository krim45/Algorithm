// fs
let N = +require('fs').readFileSync('/dev/stdin').toString().trim();
let answer = 0;

while (N >= 0) {
    if (N % 5 === 0) {
        answer += Math.floor(N/5);
        break;
    }
    N -= 3;
    answer++;
}

if (N < 0) {
    answer = -1;
}
console.log(answer);

// readline
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', () => {
    let N = +input[0];
    let answer = 0;

    while (N >= 0) {
        if (N % 5 === 0) {
            answer += Math.floor(N/5);
            break;
        }
        N -= 3;
        answer++;
    }
    
    if (N < 0) {
        answer = -1;
    }
    console.log(answer);
    process.exit();
});
