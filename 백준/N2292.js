// fs
const N = +require('fs').readFileSync('/dev/stdin').toString().trim();

function check(n) {
    let num = 1;
    for (let i = 1; i <= n; i++) {
        if (n <= num) {
            return i
        }
        num += 6 * i;
    }
}

console.log(check(N));

// readline
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

function check(n) {
    let num = 1;
    for (let i = 1; i <= n; i++) {
        if (n <= num) {
            return i 
        }
        num += 6 * i;
    }
}

rl.on('line', function(line) {
    input.push(line);
}).on('close', () => {
    console.log(check(input[0]));
    process.exit();
});
