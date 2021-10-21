const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const dp = [0, 1, 3];

for (let i = 3; i <= Number(input); i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007
}

console.log(dp[Number(input)]);
