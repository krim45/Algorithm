function solution(N, road, K) {
    const answer = [1];
    const distance = {};
    const board = new Array(N + 1).fill(0).map(_ => new Array(N + 1).fill(false));
    
    for (let info of road) {
        let first = Math.min(info[0], info[1]);
        let second = Math.max(info[0], info[1]);
        let dist = info[2];
        board[first][second] = true;
        
        if (distance[[first, second]]) {
            distance[[first, second]] = Math.min(distance[[first, second]], dist)
        } else {
            distance[[first, second]] = dist
        }
    }
    
    for (let i = 1; i <= N; i++) {
        
    }

    return distance;
}
