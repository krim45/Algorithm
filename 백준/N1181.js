//fs
let [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    
arr = arr.sort((a, b) => {
    if (a.length > b.length) {
        return 1
    } else if (a.length < b.length) {
        return -1
    } else {
        if (a < b) {
            return -1
        } else if (a > b) {
            return 1
        } else {
            return 0
        }
    }
}).filter((v, i, a) => v !== a[i+1]);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// readline
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', () => {
    let [n, ...arr] = input;
    
    arr = arr.sort((a, b) => {
        if (a.length > b.length) {
            return 1
        } else if (a.length < b.length) {
            return -1
        } else {
            if (a < b) {
                return -1
            } else if (a > b) {
                return 1
            } else {
                return 0
            }
        }
    }).filter((v, i, a) => v !== a[i+1]);
    
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    
    process.exit();
})
