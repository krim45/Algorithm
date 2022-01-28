function solution(id_list, report, k) {
    report = [...new Set(report)];
    
    const board = {};
    const reports = {};
    const answer = [];
    
    for (let i = 0; i < report.length; i++) {
        const [user, reported] = report[i].split(' ');
        
        board[user] = board[user] ? [...board[user], reported] : [reported] ;
        reports[reported] = (reports[reported] || 0 ) + 1;
    }
    
    for (let i = 0; i < id_list.length; i++) {
        const user = id_list[i]
        const list = board[user]
        let count = 0;
        
        if (list) {
            for (let j = 0; j < list.length; j++) {
                if (reports[list[j]] >= k) {
                    count++;
                }
            }
        }
        
        answer.push(count);
    }
    
    return answer;
}
