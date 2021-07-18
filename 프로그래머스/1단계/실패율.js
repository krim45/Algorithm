function solution(N, stages) {
    let arr = []
    var answer = [];
    let failRate = [];
    let failCount = 0;
    let playersOnStage = stages.length;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < stages.length; j++) {
            if ((i + 1) === stages[j]) {
                failCount++;
            }
        }
        if (playersOnStage !== 0) {
            failRate[i] = failCount / playersOnStage;
        } else {
            failRate[i] = 0;
        }
        playersOnStage -= failCount;
        failCount = 0;
        answer[i] = failRate[i];
    }
    failRate.sort((a, b) => b - a);
    for (let i = 0; i < answer.length; i++) {
        for (let j = 0; j < answer.length; j++) {
            if (failRate[i] === answer[j]) {
                arr[i] = j + 1;
                answer[j] = -1;
                break;
            }      
        }
    }
    return arr;
}
