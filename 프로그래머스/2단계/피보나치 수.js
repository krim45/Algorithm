function solution(n) {
    let f = [0, 1];
    for (let i = 2; i <= n; i++) {
        f.push((f[i - 2] + f[i - 1])%1234567);
    }
    return f[n];
}
