function solution(n, m) {
    var answer = [];
    let a = Math.min(n, m);
    let b = Math.max(n, m);
    while (a !== 0) {
        let temp = b % a;
        b = a;
        a = temp;
    }
    answer[0] = b;
    answer[1] = n * m / b;
    return answer;
}
