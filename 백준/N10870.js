const input = +require('fs').readFileSync('/dev/stdin').toString().trim();

let dp = new Array(21);

dp[0] = 0;
dp[1] = 1;

for (let i = 2; i < dp.length; i++) {
    dp[i] = dp[i-1] + dp[i-2];
}

console.log(dp[input]);
