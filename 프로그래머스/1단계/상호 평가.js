function solution(scores) {
    var answer = '';
    
    function checkCredit(score) {
       score >= 90 ? answer += 'A'    
        : score >= 80 ? answer += 'B'
        : score >= 70 ? answer += 'C'
        : score >= 50 ? answer += 'D'
        : answer += 'F'
    }
    
    function onlyOne(arr, score) {
        let number = 0;
        
        for (let i = 0; i < arr.length; i++) {
            if (score === arr[i]) number++;
            if (number > 1) return false
        }
        
        return true;
    } 
    
    const list = scores.map((score, i) => scores.map(v => v[i]));
    
    for (let i = 0; i < list.length; i++) {
        if ((list[i][i] === Math.max(...list[i]) || list[i][i] === Math.min(...list[i])) && onlyOne(list[i], list[i][i])) {
            checkCredit((list[i].reduce((acc, cur) => acc + cur, 0) - list[i][i]) / (list[i].length - 1));
        } else {
            checkCredit(list[i].reduce((acc, cur) => acc + cur, 0) / list[i].length);
        }
    }
    
    return answer;
}
