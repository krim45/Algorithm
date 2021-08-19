function solution(input) {
    const [N, K] = input;
    
    function factorial(number) {
        let num = 1;
        for (let i = number; i > 0; i--) {
            num *= i;
        }
        return num;
    }
    
    const answer = factorial(N) / (factorial(K) * factorial(N - K));
    console.log(answer);
}

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ').map(Number);
}).on('close', () => {
    solution(input);
    process.exit();
});
