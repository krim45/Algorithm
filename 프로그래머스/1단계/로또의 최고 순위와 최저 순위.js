function solution(lottos, win_nums) {
    var answer = [7, 7];
    for (let i = 0; i < lottos.length; i++) {
        if (lottos[i] === 0) {
            answer[0]--;
            continue;    
        }
        for (let j = 0; j < win_nums.length; j++) {
            if (lottos[i] === win_nums[j]) {
                answer[0]--;
                answer[1]--;
                break;
            }
        }
    }
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] > 5) {
            answer[i] = 6;
        }
    }
    return answer;
}

// filter(), includes()
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];
    
    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;
    
    let maxCount = minCount + zeroCount
    
    return [rank[maxCount], rank[minCount]]
}
