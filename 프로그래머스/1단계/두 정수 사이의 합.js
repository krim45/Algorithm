function solution(a, b) {
    var answer = 0;
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    for (let i = min; i <= max; i++) {
        answer += i;
    }
    return answer;
}

// 등차수열 개념 (양 끝의 합 * 양 끝의 합의 개수)/ 2 
function solution(a, b) {
    return (a+b)*(Math.abs(b-a)+1)/2;
}
