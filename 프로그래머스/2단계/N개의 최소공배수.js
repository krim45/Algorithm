function solution(arr) {
    var answer = 0;
    let tmp = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        let b = arr[i+1];
        let a = arr[i];
        while (a !== 0) {
            tmp = b % a;
            b = a;
            a = tmp;
        }
        arr[i+1] = arr[i] * arr[i+1] / b
    }
    answer = arr[arr.length - 1];
    return answer;
}

// gcd 함수 만들기 + reduce() 메서드 이용
function solution(arr) {
    return arr.reduce((a,b) => a*b/gcd(a,b));
}

function gcd(a, b) {
  return b ? gcd(b, a%b) : a
}
