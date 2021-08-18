function solution(input) {
    let deque = [];
    let result = [];
    
    for (let i = 1; i < input.length; i++) {
        const [order, N] = input[i].split(' ');
        
        if (order == 'push_front') {
            deque.unshift(parseInt(N));
        }
        else if (order == 'push_back') {
           deque.push(parseInt(N));
        }
        else if (order == 'pop_front') {
            if (deque.length > 0) {
                result.push(deque.shift());
            } else {
                result.push(-1);
            }
        }
        else if (order == 'pop_back') {
            if (deque.length > 0) {
                result.push(deque.pop());  
            } else {
                result.push(-1);
            }
        }
        else if (order == 'size') {
            result.push(deque.length);
        }
        else if (order == 'empty') {
            if (deque.length > 0) {
                result.push(0);
            } else {
                result.push(1);
            }
        }
        else if (order == 'front') {
            if (deque.length > 0) {
                result.push(deque[0]);    
            } else {
                result.push(-1);
            }
        }
        else if (order == 'back') {
            if (deque.length > 0) {
                result.push(deque[deque.length - 1]);
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
