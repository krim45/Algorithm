function solution(left, right) {
    var answer = 0;
    let count = 0;
    for (let i = left; i <= right; i++) {
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                count++;
            }
        }
        if (count % 2 === 0) {
            answer += i;
        } else {
            answer -= i;
        }
        count = 0;
    }
    return answer;
}

// 효율 늘리기
function solution(left, right) {
    var answer = 0;
    let count = 0;
    for (let i = left; i <= right; i++) {
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                count++;
                if (j !== i / j) {
                    count++;    
                }
            }
        }
        if (count % 2 === 0) {
            answer += i;
        } else {
            answer -= i;
        }
        count = 0;
    }
    return answer;
}

// 수학적 접근, 수가 제곱수이면 약수의 개수는 홀수
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}
