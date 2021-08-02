// fs
const [n, m, ...strArr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);

    const white = [
        "WBWBWBWB",
        "BWBWBWBW",
        "WBWBWBWB",
        "BWBWBWBW",
        "WBWBWBWB",
        "BWBWBWBW",
        "WBWBWBWB",
        "BWBWBWBW",
    ];
    
    const black = [
        "BWBWBWBW",
        "WBWBWBWB",
        "BWBWBWBW",
        "WBWBWBWB",
        "BWBWBWBW",
        "WBWBWBWB",
        "BWBWBWBW",
        "WBWBWBWB",
    ]
    
    let minArr = [];
    
    for (let i = 0; i < n - 7; i++) {
        for (let j = 0; j < m - 7; j++) {
            minArr.push(check(i, j, white));
            minArr.push(check(i, j, black));
        }
    }
    
    const min = Math.min(...minArr);
    console.log(min);

function check(a, b, board) {
    let count = 0;
    
    for (let i = a; i < a + 8; i++) {
        for (let j = b; j < b + 8; j++) {
            if (strArr[i][j] !== board[i - a][j - b]) {
                count++
            }
        }
    }
    return count;
}

// readline
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', () => {
    const [str, ...strArr] = input;
    const [n, m] = str.split(' ').map(v => +v);
    
    const white = [
        "WBWBWBWB",
        "BWBWBWBW",
        "WBWBWBWB",
        "BWBWBWBW",
        "WBWBWBWB",
        "BWBWBWBW",
        "WBWBWBWB",
        "BWBWBWBW",
    ];
    
    const black = [
        "BWBWBWBW",
        "WBWBWBWB",
        "BWBWBWBW",
        "WBWBWBWB",
        "BWBWBWBW",
        "WBWBWBWB",
        "BWBWBWBW",
        "WBWBWBWB",
    ];
    
    function check (a, b, board) {
        let count = 0;
    
        for (let i = a; i < a + 8; i++) {
            for (let j = b; j < b + 8; j++) {
                if (strArr[i][j] !== board[i - a][j - b]) {
                    count++
                }
            }
        }
    return count
    }
    
    let minArr = [];
    for (let i = 0; i < n - 7; i++) {
        for (let j = 0; j < m - 7; j++) {
            minArr.push(check(i, j, white));
            minArr.push(check(i, j, black));
        }
    }
    
    const min = Math.min(...minArr);
    
    console.log(min);
    process.exit();
})
