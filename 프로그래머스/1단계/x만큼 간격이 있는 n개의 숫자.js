function solution(x, n) {
    var answer = [];
    for (let i = 0;i < n;i++) {
        answer[i] = x + x * i;
    }
    return answer;
}

// 더 효율 좋은 코드
function solution(x, n) {
    var answer = [];
    answer[0] = x;
    for (let i = 1;i < n;i++) {
        answer[i] = answer[i - 1] + x;
    }
    return answer;
}
