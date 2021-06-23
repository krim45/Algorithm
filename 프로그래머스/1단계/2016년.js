function solution(a, b) {
    var answer = '';
    let day = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
    let month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let count = 0;
    for (let i = 0; i < month.length; i++) {
        if (month[i] === a) {
            for (let j = 0; j < i; j++) {
                count += date[j];
            }
        }
    }
    count += b;
    answer = day[count % 7];
    return answer;
}

// 정리

function solution(a, b) {
    var answer = '';
    let day = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
    let date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let count = 0;
    for (let i = 0; i < a - 1; i++) {
                count += date[i];
    }
    answer = day[(count + b) % 7];
    return answer;
}
