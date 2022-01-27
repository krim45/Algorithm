function solution(n, lost, reserve) {
    let lostFilter = lost.filter(v => !reserve.includes(v));
    let reserveFilter = reserve.filter(v => !lost.includes(v)).sort((a, b) => a - b);
    let num = n - lostFilter.length;
    
    for (let i = 0; i < reserveFilter.length; i++) {
        let first = lostFilter.findIndex(v => v === reserveFilter[i] - 1);
        
        if (first === -1 ) {
            first = lostFilter.findIndex(v => v === reserveFilter[i] + 1);   
        }
        
        if (first !== -1) {
            lostFilter.splice(first, 1);
            num++;
        }
    }
    
    return num;
}
