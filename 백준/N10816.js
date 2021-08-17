function solution(input) {
    const arrN = input[1].split(' ').map(Number);
    const arrM = input[3].split(' ').map(Number);
    let arr = arrN.reduce((a, b) => {
        a[b] = (a[b] || 0) + 1;
            return a;
        }, {});
    let result = [];

    for (let i = 0; i < arrM.length; i++) {
        if (arr[arrM[i]]) {
            result.push(arr[arrM[i]]);
        } else {
            result.push(0);
        }
    }

    console.log(result.join(' '));
}

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', () => {
    solution(input);
    process.exit();
});
