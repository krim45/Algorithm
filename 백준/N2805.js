// fs
let [num, arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = num.split(' ').map(Number);
let trees = arr.split(' ').map(Number).sort((a,b) => a - b);

let min = 0;
let max = trees[N-1];
let mid = Math.floor((min + max) / 2);

while (min <= max) {
    mid = Math.floor((min + max) / 2);
    sum = 0;
    for (let i = 0; i < trees.length; i++) {
        if (trees[i] - mid > 0) sum += trees[i] - mid;
    }
    if (sum >= M) min = mid + 1;
    else max = mid - 1;
}

console.log(max);

// readline
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', () => {
    const [num, arr] = input;
    const [N, M] = num.split(' ').map(Number);
    const trees = arr.split(' ').map(Number).sort((a, b) => a - b);

    let min = 0;
    let max = trees[N - 1];
    let mid = Math.floor((min + max) / 2);

    while (min <= max) {
        mid = Math.floor((min + max) / 2);
        sum = 0;
        for (let i = 0; i < trees.length; i++) {
            if (trees[i] - mid > 0) sum += trees[i] - mid;
        }
        if (sum >= M) min = mid + 1;
        else max = mid - 1;
    }    

    console.log(max);
    process.exit();
});
