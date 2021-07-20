const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];

rl.on('line', function (line) {
    input.push(parseInt(line));
}).on('close', function() {
    const [a, b] = input;
    
    if (a > 0 && b > 0) {
        console.log(1);
    }
    else if (a < 0 && b > 0) {
        console.log(2);
    }
    else if (a < 0 && b < 0) {
        console.log(3);
    }
    else if (a > 0 && b < 0) {
        console.log(4);
    }
    process.exit();
})

