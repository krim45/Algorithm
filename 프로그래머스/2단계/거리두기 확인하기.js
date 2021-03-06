function solution(places) {
    const order = ['U', 'D', 'L', 'R'];
    const command = {
        U: [0, 1],
        D: [0, -1],
        L: [-1, 0],
        R: [1, 0]
    };
    const answer = [];
    
    const checkO = (row, col, place) => {
        let count = 0;
        
        for (let dir of order) {
            const [mX, mY] = command[dir];
            const [X, Y] = [row + mX, col + mY];
            
            if (0 <= X && X < 5 && 0 <= Y && Y < 5) {
                if (place[X][Y] === 'P') {
                    count++;
                }
            }
        }
        
        return count < 2;
    }
    
    const checkP = (row, col, place) => {
        for (let dir of order) {
            const [mX, mY] = command[dir];
            const [X, Y] = [row + mX, col + mY];
            
            if (0 <= X && X < 5 && 0 <= Y && Y < 5) {
                if (place[X][Y] === 'P') {
                    return false;
                }
            }
        }
        
        return true
    }
    
    const keepDistance = (place) => {
        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
                if (place[row][col] === 'P') {
                    if (!checkP(row, col, place)) return false
                }
                else if (place[row][col] === 'O') {
                    if (!checkO(row, col, place)) return false
                }
            }
        }
        return true;
    }
    
    for (let i = 0; i < places.length; i++) {
        const place = places[i];
        
        if (keepDistance(place)) {
            answer.push(1);
        } else {
            answer.push(0);
        }
    }
    
    return answer;
}

// naive
function solution(places) {
    const order = ['LL', 'LD', 'DL', 'DD', 'RR', 'RD', 'DR', 'LU', 'UL', 'UU', 'UR', 'RU'];
    const command = {
        U: [0, 1],
        D: [0, -1],
        L: [-1, 0],
        R: [1, 0]
    }
    const answer = [];
    const warning = ['OP', 'PO', 'PP', 'PX', 'P']
    
    const check = (row, col, place) => {
        for (let str of order) {
            let [X, Y] = [row, col];
            let position = '';
            
            for (let dir of str) {
                const [mX, mY] = command[dir];
                [X, Y] = [X + mX, Y + mY];
                
                if (0 <= X && X < 5 && 0 <= Y && Y < 5) {
                    position += place[X][Y]    
                }
            }
            
            if (warning.includes(position)) {
                return false
            } 
        }
        
        return true;
    }
    
    const keepDistance = (place) => {
        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
                if (place[row][col] === 'P') {
                    if (!check(row, col, place)) {
                       return false
                    }    
                }
            }
        }
        return true;
    }
    
    for (let i = 0; i < places.length; i++) {
        const place = places[i];
        
        if (keepDistance(place)) {
            answer.push(1);
        } else {
            answer.push(0);
        }
    }
    
    return answer;
}
