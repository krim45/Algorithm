function solution(n) {
    var answer = 0;
    let x = Math.sqrt(n)
    if (x % 1 === 0) {
        answer = Math.pow(x + 1, 2);
    } else {
        answer = -1 ;
    }
    return answer;
}
