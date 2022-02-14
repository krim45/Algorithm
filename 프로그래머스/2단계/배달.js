function solution(N, road, K) {
    const distance = new Array(N + 1).fill(Infinity);
    const board = new Array(N + 1).fill(0).map(_ => []);
    
    for (let info of road) {
        const [from, to, dist] = info;
        
        board[from].push([to, dist]);
        board[to].push([from, dist]);
    }
    
    const queue = [1];
    distance[1] = 0;
    
    while (queue.length > 0) {
        const from = queue.pop();
        
        board[from].forEach(next => {
            const [to, dist] = next
            
            if (distance[to] > distance[from] + dist) {
                distance[to] = distance[from] + dist;
                queue.push(to);
            }
        })
    }
    
    return distance.filter(v => v <= K).length;
}
