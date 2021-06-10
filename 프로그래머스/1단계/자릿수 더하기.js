// 문자열로 풀기
function solution(n) {
    var answer = 0;
    let arr = n.toString().split('');
    for (let i = 0; i < arr.length; i++) {
        answer = answer + Number(arr[i]);
    }
    return answer;
}

// 숫자로 풀기
function solution(n) {
    var answer = 0;
    let b = n;
    let a = 0;
    for (let i = 0; i < (n + '').length; i++) {
        a = Math.floor(b / Math.pow(10, (n + '').length - i - 1));
        b = b - (a * Math.pow(10, (n + '').length - i - 1));
        answer += a;
    }
    return answer;
}
