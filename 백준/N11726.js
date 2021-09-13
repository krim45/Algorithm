const input = +require('fs').readFileSync('/dev/stdin').toString().trim();

let dp = new Array(1001);

dp[0] = 0;
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i < dp.length; i++) {
    dp[i] = (dp[i-1] + dp[i-2]) % 10007;
}

console.log(dp[input]);
