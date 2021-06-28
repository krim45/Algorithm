function solution(d, budget) {
    var answer = 0;
    let rest = budget;
    d.sort((a,b) => a - b);
    for (let i = 0; i < d.length; i++) {
        if (d[i] <= rest) {
            answer++;
            rest -= d[i];
        }
    }
    return answer;
}
