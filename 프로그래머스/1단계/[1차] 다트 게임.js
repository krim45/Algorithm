function solution(dartResult) {
    var answer = 0;
    let arr = [0, 0, 0]
    let score = [0, 0, 0];
    let power = [0, 0, 0];
    let bonus = [0, 0, 0];
    let minus = [0, 0, 0];
    
    // arr의 각 항을 세트별로 나눈다.
    let str = [];
    let j = 0;
    for (let i = 0; i < dartResult.length; i++) {
        if (isNaN(dartResult[i]) === true && isNaN(dartResult[i + 1]) === false) {
            str[j] = i;
            j++
        }
    }
    arr[0] = dartResult.substring(0, str[0] + 1);
    arr[1] = dartResult.substring(str[0] + 1, str[1] + 1);
    arr[2] = dartResult.substring(str[1] + 1);

    // score, power, bonus, minus를 구한다
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (isNaN(arr[i][j]) === false) {
                score[i] += arr[i][j];
            } else {
                if (arr[i][j] === '#')  {
                    minus[i] = -1;
                } else if (arr[i][j] === '*')  {
                    bonus[i] += 1;
                    if (i > 0) {
                        bonus[i - 1] += 1;   
                    }
                } else if (arr[i][j] === 'S') {
                    power[i] = 1
                } else if (arr[i][j] === 'D') {
                    power[i] = 2
                } else if (arr[i][j] === 'T') {
                    power[i] = 3
                }
            }
        }
        score[i] = +score[i];
    }
    for (let i = 0; i < 3; i++) {
        answer += Math.pow(score[i], power[i]) * Math.pow(2, bonus[i]) * Math.pow((-1), minus[i]);
    }
    return answer;
}
