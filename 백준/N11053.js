const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input.shift();

function solution(input) {
    let arr = input[0].split(' ').map(Number);
    let dp = new Array(N);


    for (let i = 0; i < arr.length; i++) {
        dp[i] = 1;
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1
            }
        }
    }
    console.log(Math.max(...dp));
}

solution(input);
