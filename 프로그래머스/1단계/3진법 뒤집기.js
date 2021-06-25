function solution(n) {
    var answer = 0;
    let str = '';
    let rest = 0;
    while (n !== 0) {
        rest = n % 3;
        n = Math.floor(n / 3);
        str += rest;
    }
    for (let i = 0; i < str.length; i++) {
        answer += (str[str.length - 1 - i] * 3**i);
    }
    return answer;
}
