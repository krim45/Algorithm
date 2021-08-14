// fs
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let data = input.map(v => v.split(' ').map(Number));
data.shift();

let result = [];

for (let i = 0; i < data.length; i++) {
    let count = 0;
    for (let j = 0; j < data.length; j++) {
        if (i === j) {
            continue;
        }
        else if (data[i][0] < data[j][0] && data[i][1] < data[j][1]) {
            count++;
        }
    }
    result.push(count + 1);
}

console.log(result.join(' '));

// readline
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', () => {
    const data = input.map(v => v.split(' ').map(Number));
    data.shift();
    
    let result = [];

    for (let i = 0; i < data.length; i++) {
        let count = 0;
        for (let j = 0; j < data.length; j++) {
            if (i === j) {
                continue;
            }
            else if (data[i][0] < data[j][0] && data[i][1] < data[j][1]) {
              count++;
            }
        }
        result.push(count + 1);
    }
    console.log(result.join(' '))
    process.exit();
});
