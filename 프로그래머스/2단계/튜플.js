function solution(s) {
    const board = s.slice(2,-2).split(`},{`).map(str => str.split(',').map(v => Number(v))).sort((a, b) => a.length - b.length);
    const set = new Set();
    
    for (let arr of board) {
        arr.forEach(v => {
            set.add(v);
        })
    }
    
    return [...set]
}
