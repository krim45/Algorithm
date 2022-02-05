function solution(record) {
    const answer = [];
    const data = {};

    for (let str of record) {
        const [action, id, nickname] = str.split(' ');

        if (action === 'Enter') {
            data[id] = nickname;
            answer.push(['님이 들어왔습니다.' , id])
        }
        else if (action === 'Leave') {
            answer.push(['님이 나갔습니다.', id])
        }
        else if (action === 'Change') {
            data[id] = nickname;
        }
    }

    return answer.map(v => data[v[1]] + v[0]);
}
