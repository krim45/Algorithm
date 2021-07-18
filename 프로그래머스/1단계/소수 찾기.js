function solution(n) {
    var answer = 0;
    let count = 0;
    let arr = [];
    for (let i = 0; i < n + 1; i++) {
        arr[i] = true;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (arr[i] === true) {
        for (let j = 2; i * j <= n; j++) {
                arr[i * j] = false;
            }
        }
    }
    for (let i = 0; i < n + 1; i++){
        if (arr[i] === true) {
            count++;
        }
    }
    answer = count - 2;
    return answer;
}
