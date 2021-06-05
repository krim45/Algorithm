function solution(x) {
    var answer = true;
    let xsplit = String(x).split('');
    let sum = 0;
    for (let i = 0;i < xsplit.length;i++) {
        sum += Number(xsplit[i]);
    }
    answer = x % sum === 0
    return answer;
}
