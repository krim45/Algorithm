function solution(s){
    var answer = true;
    let str = s.toUpperCase();
    let countp = 0;
    let county = 0;
    for (let i = 0; i < s.length; i++) {
        if (str[i] === 'P') {
            countp++;
        } else if (str[i] === 'Y') {
            county++;
        }
    }
    if (countp === county) {
        answer = true;
    } else {
        answer = false;
    }
    return answer;
}
