function solution(numbers, target) {
    let answer = 0;
    
    const dps = (idx, sum) => {
        if (idx === numbers.length) {
            if (sum === target) answer++
            return
        }
        
        dps(idx + 1, sum - numbers[idx]);
        dps(idx + 1, sum + numbers[idx]);
    }
    
    dps(0, 0);
    
    return answer;
}
