function solution(answers) {
    var answer = [];
    let num1 = [];
    let num2 = [];
    let num3 = [];
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    for (let i = 0; i < answers.length; i++) {
        // num1
        if ((i + 1) % 5) {
            num1[i] = (i + 1) % 5;
        } else {
            num1[i] = 5;
        }
        if (num1[i] === answers[i]) {
            count1++;
        }
        // num2
        if ((i + 1) % 8 === 0) {
            num2[i] = 5;
        } else if ((i + 1) % 8 === 6) {
            num2[i] = 4;
        } else if ((i + 1) % 8 === 4) {
            num2[i] = 3;
        } else if ((i + 1) % 8 === 2) {
            num2[i] = 1;
        } else if (i % 2 === 0) {
            num2[i] = 2;
        }
        if (num2[i] === answers[i]) {
            count2++;
        }
        // num3
        if ((i + 1) % 10 === 0 || (i + 1) % 10 === 9) {
            num3[i] = 5;
        } else if ((i + 1) % 10 < 3) {
            num3[i] = 3;
        } else if ((i + 1) % 10 < 5) {
            num3[i] = 1;
        } else if ((i + 1) % 10 < 7) {
            num3[i] = 2;
        } else if ((i + 1) % 10 < 9) {
            num3[i] = 4;
        }
        if (num3[i] === answers[i]) {
            count3++;
        }
    }
    let max = Math.max(count1, count2, count3);
    if (max === count1) {
        answer.push(1);
    }
    if (max === count2) {
        answer.push(2);
    }
    if (max === count3) {
        answer.push(3);
    }
    return answer;
}

// filter를 이용한 효율적인 방법
function solution(answers) {
    let answer = [];
    const man1 = [1, 2, 3, 4, 5];
    const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const score1 = answers.filter((a, i) => a === man1[i % man1.length]).length;
    const score2 = answers.filter((a, i) => a === man2[i % man2.length]).length;
    const score3 = answers.filter((a, i) => a === man3[i % man3.length]).length;
    
    const max = Math.max(score1, score2, score3);
    
    if (max === score1) {
        answer.push(1);
    }
    if (max === score2) {
        answer.push(2);
    }
    if (max === score3) {
        answer.push(3);
    }
    
    return answer;
}
