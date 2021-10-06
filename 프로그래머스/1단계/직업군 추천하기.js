function solution(table, languages, preference) {
    const job = ['SI', 'CONTENTS', 'HARDWARE', 'PORTAL', 'GAME']
    const answer = new Array(5).fill(0);
    const newTable = table.map(v => v.split(' '));
    
    for (let i = 0; i < newTable.length; i++) {
        for (let j = 1; j < newTable[i].length; j++) {
            let idx = languages.indexOf(newTable[i][j]);
            
            if (idx !== -1) {
                answer[i] += preference[idx] * (6 - j);
            }
        }
    }
    
    const maxScore = Math.max(...answer)
    const result = job.filter((v, i) => answer[i] === maxScore).sort()
    
    return result[0];
}
