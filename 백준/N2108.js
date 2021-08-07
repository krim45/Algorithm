// fs
let [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(v => +v);

arr.sort((a, b) => a - b);

const aver = Math.round(arr.reduce((a, b) => a + b, 0) / n);
const med = arr[Math.floor(n / 2)];
const range = arr[arr.length - 1] - arr[0];
const modeList = arr.reduce((a, b) => {
    a[b] = (a[b] || 0) + 1;
    return a
}, {});

let mode = [];
let max = Math.max(...Object.values(modeList));

for (let key in modeList) {
    if (modeList[key] == max) mode.push(key);
}

mode.sort((a, b) => a - b);

if (mode.length > 1) mode = Number(mode[1]);
else mode = Number(mode[0]);

console.log(aver + '\n' + med + '\n' + mode + '\n' + range);


// readline
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line) {
      input.push(line);
}).on('close', () => {
    let n = input.shift();
    let arr = input.map(v => +v);
    
    arr.sort((a, b) => a - b);

    const aver = Math.round(arr.reduce((a, b) => a + b, 0) / n);
    const med = arr[Math.floor(n / 2)];
    const range = arr[arr.length - 1] - arr[0];
    const modeList = arr.reduce((a, b) => {
        a[b] = (a[b] || 0) + 1;
        return a
    }, {});

    let mode = [];
    let max = Math.max(...Object.values(modeList));
    
    for (let key in modeList) {
        if (modeList[key] == max) mode.push(key);
    }

    mode.sort((a, b) => a - b);
    
    if (mode.length > 1) mode = Number(mode[1]);
    else mode = Number(mode[0]);
    
    console.log(aver + '\n' + med + '\n' + mode + '\n' + range);
    process.exit();
})
