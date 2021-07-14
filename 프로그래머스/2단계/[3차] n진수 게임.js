function solution(n, t, m, p) {
    var answer = '';
    for (let i = 0; answer.length < t * m; i++) {
        answer += i.toString(n);
    }
    let result = '';
    for (let i = 0; i < t; i++) {
        result += answer[p-1 + m*i];
    }
    return result.toUpperCase();
}
