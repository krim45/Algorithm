function solution(s) {
    var answer = '';
    let lower = s.toLowerCase();
    let j = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            j = 1;
        }
        if (j % 2 === 0) {
            answer += lower[i].toUpperCase();  
        } else {
            answer += lower[i];
        }
        j++;
    }
    return answer;
}
