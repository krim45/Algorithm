function solution(array, commands) {
    var answer = [];
    let arr = [];
    for (let i  = 0; i < commands.length; i++) {
        let start = commands[i][0] - 1;
        let end = commands[i][1];
        let k = commands[i][2] - 1;
        arr = array.slice(start, end).sort((a, b) => a - b);
        answer.push(arr[k]);
    }
    return answer;
}

// map, slice, sort, array destructuring
function solution(array, commands) {
    return commands.map(([sPosition, ePosition, kPosition]) => {
        return array.slice(sPosition - 1, ePosition).sort((a, b) => a - b)[kPosition - 1];
    })
}
