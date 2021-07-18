function solution(s) {
    var answer = true;
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i].charCodeAt(0) > 57 || s[i].charCodeAt(0) < 48) {
            answer = false;
        }
    }
    return answer;
}
