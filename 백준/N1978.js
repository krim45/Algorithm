// fs
let [n, arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
arr = arr.split(' ').map(Number);

let count = 0;

for(let i = 0; i < arr.length; i++) {
    let bol = true;
    if (arr[i] === 1) {
        bol = false;
    }
    for(let j = 2; j <= Math.sqrt(arr[i]); j++) {
        if (arr[i] % j === 0) {
            bol = false;
        }
    }
    if (bol) {
        count++;
    }
}

console.log(count);

// readline
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let count = 0;

rl.on('line', function(line) {
      input.push(line);
}).on('close', () => {
    let [n, arr] = input;
    arr = arr.split(' ').map(Number);

    for(let i = 0; i < arr.length; i++) {
        let bol = true;
        if (arr[i] === 1) {
            bol = false;
        }
        for(let j = 2; j <= Math.sqrt(arr[i]); j++) {
            if (arr[i] % j === 0) {
                bol = false;
            }
        }
        if (bol) {
            count++;
        }
    }
    
    console.log(count);
    process.exit();
})
