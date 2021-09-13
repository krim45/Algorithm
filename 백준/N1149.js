const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input.shift();

function solution(input) {
    let list = input.map(v => v.split(' ').map(Number));

    let dp = new Array(1000);
    
    dp[0] = list[0];
    dp[1] = [Math.min(list[1][0] + list[0][1], list[1][0] + list[0][2]), Math.min(list[1][1] + list[0][0], list[1][1] + list[0][2]), Math.min(list[1][2] + list[0][0], list[1][2] + list[0][1])];
    
    for (let i = 2; i < N; i++) {
        dp[i] = [Math.min(list[i][0] + dp[i-1][1], list[i][0] + dp[i-1][2]), Math.min(list[i][1] + dp[i-1][0], list[i][1] + dp[i-1][2]), Math.min(list[i][2] + dp[i-1][0], list[i][2] + dp[i-1][1])];
    }
    
    console.log(Math.min(...dp[N - 1]));
}

solution(input);
