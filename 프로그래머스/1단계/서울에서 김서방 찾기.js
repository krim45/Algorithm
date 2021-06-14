function solution(seoul) {
    var answer = '';
        answer = `김서방은 ${seoul.indexOf('Kim')}에 있다`;
    return answer;
}

// findIndex((element, index, array) => 조건)
function solution(seoul) {
    var answer = '';
        answer = `김서방은 ${seoul.findIndex((element) => element === 'Kim')}에 있다`;
    return answer;
}
