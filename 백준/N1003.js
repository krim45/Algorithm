function solution(input) {
    let result = [];
    let [a, b] = [1, 1];
    let answer = [];
    
    for (let i = 0; i <= 40; i++) {
        if (i === 0) {
            result.push('1 0');
        } else if (i === 1) {
            result.push('0 1');
        } else if (i === 2) {
            result.push('1 1')
        } else {
            let tmp = b;
            b = a + b;
            a = tmp;
            result.push(`${a} ${b}`);
        }
    }
    
    for (let i = 1; i < input.length; i++) {
        answer.push(result[input[i]]);
    }
    
    console.log(answer.join('\n'));
}

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(parseInt(line));
}).on('close', () => {
    solution(input);
    process.exit();
});
