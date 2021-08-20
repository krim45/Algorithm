function solution(input) {
    input.shift();
    input.sort((a, b) => {
        const [a1, a2] = a.split(' ').map(Number);
        const [b1, b2] = b.split(' ').map(Number);
        
        if (a1 < b1) {
            return -1;
        }
        else if (a1 > b1) {
            return 1;
        }
        else {
            if(a2 < b2) {
                return -1;
            }
            else if (a2 > b2) {
                return 1;
            }
            else {
                return 0;
            }
        }
    });
    
    console.log(input.join('\n'));
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
