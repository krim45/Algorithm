function solution(m, n, board) {
    var answer = 0;
    let count = m/2 + 1;
    var tmp;
    board = board.map(v => v.split(""));
    
    function boom(a, b) {
        if (board[a][b] !== 0) {
            if (board[a][b][0] === board[a + 1][b][0] && board[a][b][0] === board[a + 1][b + 1][0] && board[a][b][0] === board[a][b + 1][0]) {
                if (board[a][b][1] !== "0") board[a][b] += "0";
                if (board[a+1][b][1] !== "0") board[a + 1][b] += "0";
                if (board[a][b+1][1] !== "0") board[a][b + 1] += "0";
                if (board[a+1][b+1][1] !== "0") board[a + 1][b + 1] += "0";
            }
        }
    }
    
    function check() {
        for (let i = 0; i < board.length - 1; i++) {
            for (let j = 0; j < board[i].length - 1; j++) {
                boom(i,j);
            }
        }
    }
    
    function del() {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j][1] === "0") {
                    board[i][j] = 0;
                    answer++;
                }
            }
        }
    }
    
    function findNotZero(a, b) {
        if (a-1 >= 0) {
            if (board[a-1][b] === 0) {
                if (a-1 > 0) {
                    findNotZero(a-1, b);
                }
            } else if (board[a-1][b] !== undefined) {
                tmp = board[a-1][b];
                board[a-1][b] = 0;
            }
        }
    }
    
    function down() {
        for (let i = board.length-1; i > -1; i--) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === 0) {
                    findNotZero(i, j);
                    if (tmp !== undefined) {
                        board[i][j] = tmp;
                    }
                    tmp = 0;
                }
            }
        }
    }
    
    while (count > 0) {
        check();
        del();
        down();
        count--;
    }
    
    
    return answer;
}
