// fs
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(v => "" + v);
input.pop();

let reverse = input.map(v => v.split("").reverse().join(""))
    
for (let i = 0; i < input.length; i++) {
    if (input[i] === reverse[i]) {
        console.log("yes");
    } else {
        console.log("no");
    }
}

//readline
let rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', function(line) {
    input.push(line)
}).on('close', () => {
    input.pop();

    let reverse = input.map(v => v.split("").reverse().join(""))
    
    for (let i = 0; i < input.length; i++) {
        if (input[i] === reverse[i]) {
            console.log("yes");
        } else {
            console.log("no");
        }
    }
    process.exit();
})
