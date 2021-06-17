function solution(s) {
    var answer = '';
    s = s.split(" ").sort((a,b) => a-b)
    answer += s[0] + ' ' + s[s.length - 1];
    return answer;
}

// math.max , min 사용
function solution(s) {
    s = s.split(" ")
    return Math.min(...s) + ' ' + Math.max(...s);
}
