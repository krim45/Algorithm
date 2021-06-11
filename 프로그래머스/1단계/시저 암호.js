function solution(s, n) {
    var answer = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            answer += ' '
        } else if (s.charCodeAt(i) < 91) {
            if (s.charCodeAt(i) + n > 90) {
                answer += String.fromCharCode(s.charCodeAt(i) + n - 90 + 64);
            } else {
                answer += String.fromCharCode(s.charCodeAt(i) + n);
            }            
        } else if (s.charCodeAt(i) > 96) {
            if (s.charCodeAt(i) + n > 122) {
                answer += String.fromCharCode(s.charCodeAt(i) + n - 122 + 96);    
            } else {
                answer += String.fromCharCode(s.charCodeAt(i) + n);
            }
        }
    }
    return answer;
}
