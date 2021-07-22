function solution(number, k) {
    var answer = '';
    let startIdx = 0;
    let max;
    let maxIdx = 0;
    const count = number.length - k;

    for (let i = 1; i < count + 1; i++) {
        max = '0';
        
        for (let j = 0; j < k + 1; j++) {
            if (number[j] > max) {
                max = number[j];
                maxIdx = j;

                if (max === '9') {
                    break;
                }
            }
        }
        
        answer += max;
        k -= maxIdx;
        startIdx = maxIdx + 1;
        number = number.substring(startIdx);
        
        if (k === 0) {
            answer += number;
            break;
        }
    }

    return answer;
}
