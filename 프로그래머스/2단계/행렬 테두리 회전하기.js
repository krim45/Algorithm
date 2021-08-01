// 반시계방향으로 밀어내기
function solution(rows, columns, queries) {
    var answer = [];
    let board = [];
    let count = 0;
    
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            count++;
            board[i][j] = count;
        }
    }
    
    for (let k = 0; k < queries.length; k++) {
        let [x1, y1, x2, y2] = queries[k];
        let save = board[x1-1][y1-1];
        let min = save;
        
        for (let i = x1 - 1, j = y1 - 1; i < x2 - 1; i++) {
            board[i][j] = board[i+1][j];
            if (board[i][j] < min) {
                min = board[i][j];
            }
        }
        
        for (let i = x2 - 1, j = y1 - 1; j < y2 - 1; j++) {
            board[i][j] = board[i][j+1];
            if (board[i][j] < min) {
                min = board[i][j];
            }
        }
        
        for (let i = x2 - 1, j = y2 - 1; i > x1 - 1 ; i--) {
            board[i][j] = board[i-1][j];
            if (board[i][j] < min) {
                min = board[i][j];
            }
        }

        for (let i = x1 - 1, j = y2 - 1; j > y1 ; j--) {
            board[i][j] = board[i][j-1];
            if (board[i][j] < min) {
                min = board[i][j];
            }
        }
        
        board[x1-1][y1] = save;
        answer.push(min);
    }
    
    return answer;
}


// 시계방향으로 밀어내기
function solution(rows, columns, queries) {
    var answer = [];
    var save = [];
    let board = [];
    let count = 0;
    
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            count++;
            board[i][j] = count;
        }
    }
    
    for (let k = 0; k < queries.length; k++) {
        let [x1, y1, x2, y2] = queries[k];
        let min = rows * columns;
        
        save.push(board[x1-1][y1-1])
        for (let i = x1 - 1, j = y1; j < y2; j++) {
            save.push(board[i][j]);
            board[i][j] = save[0];
            if (board[i][j] < min) {
                min = board[i][j];
            }
            save.shift();
        }
        
        for (let i = x1, j = y2 - 1; i < x2; i++) {
            save.push(board[i][j]);
            board[i][j] = save[0];
            if (board[i][j] < min) {
                min = board[i][j];
            }
            save.shift();
        }
        
        for (let i = x2 - 1, j = y2 - 2; j >= y1 - 1 ; j--) {
            save.push(board[i][j]);
            board[i][j] = save[0];
            if (board[i][j] < min) {
                min = board[i][j];
            }
            save.shift();
        }

        for (let i = x2 - 2, j = y1 - 1; i >= x1 - 1 ; i--) {
            save.push(board[i][j]);
            board[i][j] = save[0];
            if (board[i][j] < min) {
                min = board[i][j];
            }
            save.shift();
        }
        
        save.shift();
        answer.push(min);
    }
        
    
    return answer;
}
