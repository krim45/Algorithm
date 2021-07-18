function solution(s) {
    let i = s.length;
    if (i % 2 === 0) {
        return s[i / 2 - 1] + s[i / 2]
    } else {
        return s[(i - 1) / 2];
    }
}
