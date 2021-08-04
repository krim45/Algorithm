// fs
const input = +require('fs').readFileSync('/dev/stdin').toString().trim();

let count = 0;
let num = 666;
while (true) {
    if (String(num).includes('666')) {
        count++;
    }
    if (input === count) {
        console.log(num);
        break;
    }
    num++;
}

// readline
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];

rl.on('line', function(line) {
    input.push(line)
}).on('close', () => {
    let count = 0;
    let num = 666;
    while (true) {
        if (String(num).includes('666')) {
           count++;
        }
        if (input[0] == count) {
           console.log(num);
           break;
        }
        num++;
    }
    
    process.exit();
})
