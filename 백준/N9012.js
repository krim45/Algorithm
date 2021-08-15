// fs
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let result = [];

for (let i = 1; i < input.length; i++) {
    let stack = [];
    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] === `(`) {
            stack.push(input[i][j]);
        }
        if (input[i][j] === `)` && stack[stack.length - 1] === '(') {
            stack.pop()
        }
        else if (input[i][j] === `)` ) {
            stack.push(input[i][j]);
        }
    }
    if (stack.length === 0) {
        result.push('YES');
    } 
    else {
        result.push('NO');    
    }
}

console.log(result.join('\n'));

// readline
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', () => {
    let result = [];
    
    for (let i = 1; i < input.length; i++) {
        let stack = [];
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] === `(`) {
                stack.push(input[i][j]);
            }
            if (input[i][j] === `)` && stack[stack.length - 1] === '(') {
                stack.pop()
            }
            else if (input[i][j] === `)` ) {
                stack.push(input[i][j]);
            }
        }
        if (stack.length === 0) {
            result.push('YES');
        } 
        else {
            result.push('NO');    
        }
    }
    
    console.log(result.join('\n'));
    process.exit();
});
