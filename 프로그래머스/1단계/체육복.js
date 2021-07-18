function solution(n, lost, reserve) {
    var answer = 0;
    answer = n - lost.length;
    for (let i = 0; i < reserve.length; i++) {
        for (let j = 0; j < lost.length; j++) {
            if (reserve[i] === lost[j]) {
                reserve[i] = -10;
                lost[j] = -3;
                answer++;
                break;
            }
        }
    }
    for (let i = 0; i < reserve.length; i++) {
        for (let j = 0; j < lost.length; j++) {
            if (reserve[i] - 1 === lost[j]) {
                answer++;
                reserve[i] = -5;
                lost[j] = -3;
                break;
            } else if (reserve[i] + 1 === lost[j]) {
                answer++;
                reserve[i] = -5;
                lost[j] = -3;
                break;
            }
        }
    }
    return answer;
}
