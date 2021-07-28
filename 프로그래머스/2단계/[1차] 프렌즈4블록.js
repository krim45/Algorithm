function solution(m, n, board) {
    var answer = 0;
    let tmp;
    board = board.map(v => v.split(""));
    
    function check() {
        for (let i = 0; i < board.length-1; i++) {
            for (let j = 0; j < board[i].length-1; j++) {
                if (board[i][j] !== 0) {
                    if (board[i][j][0] === board[i+1][j][0] && board[i][j][0] === board[i+1][j+1][0] && board[i][j][0] === board[i][j+1][0]) {
                        if (board[i][j][1] !== "0") board[i][j] += "0";
                        if (board[i+1][j][1] !== "0") board[i + 1][j] += "0";
                        if (board[i][j+1][1] !== "0") board[i][j + 1] += "0";
                        if (board[i+1][j+1][1] !== "0") board[i + 1][j + 1] += "0";
                    }
                }
            }
        }
    }
    
    function del() {
        let count = 0;
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j][1] === "0") {
                    board[i][j] = 0;
                    count++;
                }
            }
        }
        return count;
    }
    
    function findNotZero(a, b) {
        if (board[a-1][b] === 0 && a-2 >= 0) {
            return findNotZero(a-1,b);
        } else {
            tmp = board[a-1][b];
            board[a-1][b] = 0;
        }
    }
    
    function down() {
        for (let i = board.length -1; i > 0; i--) {
            for (let j = 0; j < board[i].length; j++) {
                   if (board[i][j] === 0) {
                       findNotZero(i,j);
                       board[i][j] = tmp;
                       tmp = 1;
                   }
            }
        }
    }
    
    while (true) {
        check();
        let stop = del();
        if (stop === 0) {
            break;
        }
        answer += stop;
        down();
    }
    
    return answer;
}
