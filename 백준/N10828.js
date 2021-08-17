function solution(input) {
    let result =[];
    let stack = [];
    for (let i = 1; i < input.length; i++) {
        const [order, N] = input[i].split(' ');
        
        if (order == 'push') {
            stack.push(parseInt(N));
        }
        else if (order == 'pop') {
            if (stack.length > 0) {
                result.push(stack.pop());    
            } else {
                result.push(-1);
            }
        }
        else if (order == 'size') {
            result.push(stack.length);
        }
        else if (order == 'empty') {
            if (stack.length) {
                result.push(0);
            } else {
                result.push(1);
            }
        }
        else if (order == 'top') {
            if (stack.length) {
                result.push(stack[stack.length - 1]);    
            } else {
                result.push(-1);
            }
        }
    }
    console.log(result.join('\n'));
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
