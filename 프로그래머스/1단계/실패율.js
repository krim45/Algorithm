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

//
function solution(N, stages) {
    const board = new Array(N).fill(0);
    const challenger = new Array(N).fill(0);
    const failure = new Array(N).fill(0);
    
    for (let i = 0; i < stages.length; i++)  {
        const stage = stages[i];
        if (stage <= N) failure[stage - 1] += 1;
        
        for (let j = 0; j < stage; j++) {
            if (j < N) challenger[j] += 1;
        }
    }
    
    const result = board.map((v, i) => {
        const rate = challenger[i] !== 0 ? failure[i] / challenger[i] : 0;
        
        return [i + 1, rate]
    }).sort((a, b) => b[1] - a[1]);
    
    
    return result.map(v => v[0]);
}

//
function solution(N, stages) {
    const board = [];
    
    for (let stage = 1; stage <= N; stage++)  {
        const challenger = stages.filter(value => value >= stage).length;
        const current = stages.filter(value => value === stage).length;
        const failRate = challenger === 0 ? 0 : current / challenger;
        
        board.push([stage, failRate]);
    }
    
    board.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]);
        
    return board.map(v => v[0]);
}
