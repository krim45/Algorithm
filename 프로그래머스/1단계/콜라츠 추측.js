function solution(num) {
    var answer = 0;
    while (num !== 1) {
        if (num % 2 === 0){
            num = num / 2;
            answer++;
        };
        if (num % 2 !== 0) {
            num = num * 3 + 1;
            answer++;
        };
    };
        if (answer >= 500) {
            answer = -1;
        }
    return answer;
}

function solution(num) {
    var answer = 0;
    for (let i = 0 ; i < 500;i++) {
        if ( num === 1) {
            break;
        } else if ( num % 2 === 0 ){
            num = num / 2;
            answer++;
        } else if (num % 2 !== 0) {
            num = num * 3 + 1;
            answer++;
        }
        if (answer === 500) {
            answer = -1;
            break;
        }
    }
