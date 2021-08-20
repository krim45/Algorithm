function solution(input) {
    let arr = input;
    let N = arr.shift();
    arr = arr.map(v => v.split(' ').map(Number));
    let result = '';
    arr.sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0];
        else return a[1] - b[1];
    });
    
    for (const value of arr) {
        result += `${value[0]} ${value[1]}\n`
    }
    console.log(result);
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
