function solution(s) {
    var answer = '';
    s = s.toLowerCase();
    answer += s[0].toUpperCase();
    for (let i = 1, len = s.length; i < len; i++) {
        if (s[i - 1] === ' ') {
            answer += s[i].toUpperCase();
        } else {
            answer += s[i];
        }
    }
    return answer;
}

// charAt()
function solution(s) {
    return s.toLowerCase().split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1)).join(" ");
}
