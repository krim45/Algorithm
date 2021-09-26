function solution(weights, head2head) {
    var answer = [];
    
    for (let i = 0; i < head2head.length; i++) {
        let rate = 0;
        let match = 0;
        let winH = 0;
        let weight = weights[i];
        
        for (let j = 0; j < head2head[i].length; j++) {
            if (head2head[i][j] === 'W') {
                rate++;
                
                if (weight < weights[j]) {
                    winH++;
                }
            }
            
            if (head2head[i][j] !== 'N') {
                match++;
            }
        }
      
        rate /= match * 100;
        answer.push([rate, winH, weight, i + 1]);
    }
    
    // 1. 승률 높은 순
    // 2. 무거운 복서 이긴 횟수
    // 3. 몸무게가 무거운 순
    // 4. 작은 번호 순
    answer.sort((a, b) => {
        return b[0] - a[0] ? b[0] - a[0]
            : b[1] - a[1] ? b[1] - a[1]
            : b[2] - a[2] ? b[2] - a[2]
            : a[3] - b[3]
    });
    
    return answer.map(v => v[3]);
}
