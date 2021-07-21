function solution(board) {
    let max = 0;
    for (let i = 1; i < board.length; i++) {
        for (let j = 1; j < board[i].length; j++) {
            if (board[i][j] === 1) {
                board[i][j] = Math.min(board[i-1][j-1], board[i-1][j], board[i][j-1]) + 1;    
            }
            if (max < board[i][j]) {
                max = board[i][j]
            }
        }
    }
    if (max === 0 && board[0].includes(1)) {
        return 1;
    }
    return max*max;
}
