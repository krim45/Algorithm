function solution(n) {
    var answer = 1;
    for (let i = 1; i <= n/2 + 1; i++) {
        let tmp = 0;
        for (let j = 0; j < n/2 + 1; j++) {
            tmp += i + j;
            if (tmp === n) {
                answer++;
                break;
            } else if (tmp > n) {
                break;
            }
        }
    }
    return answer;
}

// 정수론을 이용한 풀이
function solution(n) {
    var answer = 1;
    let tmp = 1;
    for (let i = 2; i <= n; i++) {
        tmp += i;
        if ((n - tmp)%i === 0) {
            answer++;
        }
        if (tmp >= n) {
            break;
        }
    }
    return answer;
}

// 홀수인 약수의 개수는 연속한 자연수로 표현할 수는 있는 방법의 개수와 같다.
function solution(n) {
    var answer = 0;

  for(var i=1; i<=n; i++) {
    if (n%i == 0 && i%2 == 1)
      answer++
  }
    return answer;
}
