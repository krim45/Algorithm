function solution(msg) {
    let answer = [];
    let dicIndex = 0;
    let dictionary = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').reduce((acc, c, i) => {
        acc[c] = i+1;
        return acc;
    }, {});
    
    for (let i = 0; i < msg.length; i++) {
        let w = msg[i];
        for (let j = i+1; j < msg.length; j++) {
            w += msg[j];
            if (dictionary[w] === undefined) {
                dictionary[w] = 27 + dicIndex;
                dicIndex++;
                w = msg.substring(i, j);
                break;
            }
        }
        answer.push(dictionary[w]);
        i = i + w.length - 1;
    }
    
    return answer;
}
