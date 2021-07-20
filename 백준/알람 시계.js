const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line) {
    input = line.split(' ')
}).on('close', function() {
    input[1] -= 45;
    if (input[1] < 0) {
        input[0] -= 1;
        input[1] = 60 + input[1];
        if (input[0] < 0) {
            input[0] = 24 + input[0];    
        }
    }
    console.log(input[0] + ' ' + input[1]);
    process.exit();
});
