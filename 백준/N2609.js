// fs
const [x, y] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function findGcd(a, b) {
    if (a % b) {
        return findGcd(b, a % b)
    } else {
        return b
    }
}

const gcd = findGcd(x, y);
const lcd = parseInt(x*y/gcd);

console.log(`${gcd}\n${lcd}`);

// readline
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

function findGcd(a, b) {
    if (a % b) {
        return findGcd(b, a % b)
    } else {
        return b
    }
}

rl.on('line', function(line) {
    input = line.split(' ').map(Number);
}).on('close', () => {
    let x = input[0];
    let y = input[1];
    
    const gcd = findGcd(x, y);
    const lcd = parseInt(x*y/gcd);
    console.log(`${gcd}\n${lcd}`);
    process.exit();
});
