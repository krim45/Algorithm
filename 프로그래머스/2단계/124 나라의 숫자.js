function solution(n) {
    var answer = '';
    let tmp = n;
    while (tmp > 0) {
        let rest = tmp % 3;
        switch(rest) {
            case 1: answer = '1' + answer;
                break;
            case 2: answer = '2' + answer;
                break;
            case 0: answer = '4' + answer;
                tmp -= 1;
                break;
            default: ;
        }
        tmp = Math.floor(tmp / 3);
        
    }
    return answer;
}

// 간결한 풀이

function solution(n) {
    var answer = '';
    
    while (n) {
        answer = [4, 1, 2][n % 3] + answer;
        n = parseInt((n - 1) / 3);
    }
    
    return answer;
}
