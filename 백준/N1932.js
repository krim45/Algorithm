const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input.shift();

function solution(input) {
    let list = input.map(v => v.split(' ').map(Number));

    let dp = new Array(500);
    
    dp[N - 1] = list[N - 1];
    
    for (let i = N - 2; i >= 0; i--) {
        dp[i] = [];
        for (let j = 0; j < list[i].length; j++) {
            dp[i].push(Math.max(list[i][j] + dp[i + 1][j], list[i][j] + dp[i + 1][j + 1]));
        }
    }
    
    console.log(dp[0][0]);
}

solution(input);
