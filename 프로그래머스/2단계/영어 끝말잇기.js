function vaild(value, idx, arr) {
    if (idx === 0) return false;
    const lastWord = arr[idx - 1];
    
    return lastWord[lastWord.length - 1] !== value[0];
}

function solution(n, words) {
    const board = {};
    
    for (let i = 0; i < words.length; i++) {
        const person = (i + 1) % n === 0 ? n : (i + 1) % n;
        const count = Math.ceil((i + 1) / n);
        const word = words[i];
        
        if (board[word] || vaild(word, i, words)) return [person, count]
        board[word] = true;
    }
    
    return [0, 0];
}
