function solution(n) {
    var answer = [];
    let a = n.toString()
    for (let i = 0; i < a.length; i++) {
        answer[a.length - i - 1] = +a.substr(i, 1);
    }
    return answer;
}

function solution(n) {
    var answer = [];
    answer = n.toString().split('').reverse().map(v => +v);
    return answer;
}
