// fs
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const result = [];

for (let i = 0; i < input.length - 1; i++) {
    let stack = [];

    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] === `(` || input[i][j] === `[`) {
            stack.push(input[i][j]);
            continue;
        }
        if ((input[i][j] === `)` && stack[stack.length - 1] == `(`) || (input[i][j] === `]` && stack[stack.length - 1] == `[`)) {
            stack.pop();
        }
        else if (input[i][j] === `)` || input[i][j] === `]`) {
            stack.push(input[i][j]);
        }
    }

    if (stack.length === 0) {
        result.push('yes');
    } else {
        result.push('no');
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
    const result = [];

    for (let i = 0; i < input.length - 1; i++) {
        let stack = [];

        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] === `(` || input[i][j] === `[`) {
                stack.push(input[i][j]);
                continue;
            }
            if ((input[i][j] === `)` && stack[stack.length - 1] == `(`) || (input[i][j] === `]` && stack[stack.length - 1] == `[`)) {
                stack.pop();
            }
            else if (input[i][j] === `)` || input[i][j] === `]`) {
                stack.push(input[i][j]);
            }
        }

        if (stack.length === 0) {
            result.push('yes');
        } else {
            result.push('no');
        }
    }

    console.log(result.join('\n'));
    process.exit();
});
