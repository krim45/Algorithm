function solution(input) {
    let queue = [];
    let result = [];
    
    for (let i = 1; i < input.length; i++) {
        const [order, N] = input[i].split(' ');
        
        if (order == 'push') {
            queue.push(parseInt(N));
        }
        else if (order == 'pop') {
            if (queue.length > 0) {
                result.push(queue.shift());
            } else {
                result.push(-1);
            }
        }
        else if (order == 'size') {
            result.push(queue.length);
        }
        else if (order == 'empty') {
            if (queue.length > 0) {
                result.push(0)
            } else {
                result.push(1)
            }
        }
        else if (order == 'front') {
            if (queue.length > 0) {
                result.push(queue[0]);
            } else {
                result.push(-1);
            }
        }
        else if (order == 'back') {
            if (queue.length > 0) {
                result.push(queue[queue.length - 1]);
            } else {
                result.push(-1);
            }
        }
    }
    
    console.log(result.join('\n'))
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
