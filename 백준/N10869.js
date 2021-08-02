// fs
const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => +v);

const [a, b] = inputs;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(parseInt(a/b));
console.log(a % b);

// readline
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(line) {
    const inputs = line.split(' ');
    const a = Number(inputs[0]);
    const b = Number(inputs[1]);
    console.log(`${a + b}
${a - b}
${a * b}
${Math.floor(a / b)}
${a % b}`);
    rl.close();
}).on('close', function () {
    process.exit();
})
