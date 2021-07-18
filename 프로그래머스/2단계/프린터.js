function solution(priorities, location) {
    var answer = 0;
    let a = 0;
    let b = 0;
    for (let i = 0; i < priorities.length; i++) {
        if (priorities.some((v) => v > priorities[i])) {
            priorities.push(priorities[i]);
            priorities.splice(i, 1);
            if (a === location) {
                location += priorities.length;
            }
            i--;
        } else {
            if (a === location) {
                return b+1;
            }
            priorities.splice(i, 1);
            i--;
            b++;
        }
        a++;
    }
    return answer;
}

// key, value를 이용한 풀이
function solution(priorities, location) {
    var answer = 0;
    var list = priorities.map((v, i) => ({
        index: i === location,
        value: v,
    }));
    
    while (true) {
        var cur = list.shift();
        if (list.some((v) => cur.value < v.value)) {
            list.push(cur);
        } else {
            answer++;
            if (cur.index) {
                return answer;
            }
        }
    }
}
