function solution(dirs) {
    const length = new Set();
    const order = {
        U: [1, 0],
        D: [-1, 0],
        R: [0, 1],
        L: [0, -1]
    }
    let cor = [0, 0];
    
    for (let dir of dirs) {
        let [y, x] = cor;
        let [my, mx] = order[dir];
        
        let Y = my + y;
        let X = mx + x;
        
        if (-5 <= Y && Y <= 5 && -5 <= X && X <= 5) {
            length.add('' + x + y + X + Y);
            length.add('' + X + Y + x + y);
            cor = [Y, X];
        }
    }
    
    return length.size / 2;
}
