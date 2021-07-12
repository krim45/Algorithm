function solution(citations) {
    var answer = 0;
    let count = 0;
    citations.sort((a, b) => a - b);
    for (let i = 0; i < citations.length; i++) {
        for (let j = 0; j < citations.length; j++) {
            if (citations[i] <= citations[j]) {
                count++;
            }
        }
        if (citations[i] >= count) {
            answer = count;
            break;
        }
        count = 0;
    }
    return answer;
}

// 더 간편하게
function solution(citations) {
    var answer = 0;
    citations.sort((a, b) => a - b);
    for (let i = 0; i < citations.length; i++) {
        let h = citations.length - i;
        if (citations[i] >= h) {
            answer = h;
            break;
        }
    }
    return answer;
}
