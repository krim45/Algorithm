function solution(board, moves) {
    var answer = 0;
    let basket = [0];
    let k = 0;
    for (let i = 0; i < moves.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[j][moves[i] - 1] !== 0) {
                basket[k] = board[j][moves[i] - 1];
                k++;
                board[j][moves[i] - 1] = 0;
                if (k > 0 && basket[k - 2] === basket[k - 1]) {
                    basket.splice(k - 2, 2);
                    answer += 2;
                    k -= 2;
                }
                break;
            }
        }
    }
    return answer;
}

//

function solution(board, moves) {
    var answer = 0;
    let basket = [0];
    for (let i = 0; i < moves.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[j][moves[i] - 1] !== 0) {
                basket.push(board[j][moves[i] - 1]);
                board[j][moves[i] - 1] = 0;
                if (basket.length > 1 && basket[basket.length - 2] === basket[basket.length - 1]) {
                    basket.pop();
                    basket.pop();
                    answer += 2;
                }
                break;
            }
        }
    }
    return answer;
}
