function solution(s){
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            count++;
        } else {
            count--;
            if (count < 0) {
                return false;
            }
        }
    }
    return count === 0;
}

// stack으로 풀기
function solution(s){
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ")") {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0;
}
