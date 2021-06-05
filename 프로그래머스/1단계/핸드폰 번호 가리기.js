function solution(phone_number) {
    var answer = '';
    answer += phone_number.slice(-4);
    for (let i = 0;i < phone_number.length - 4;i++) {
        answer = '*' + answer;
    }
    return answer;
}

function solution(phone_number) {
    var answer = '';
    let psplit = phone_number.split('');
    for (let i = 0;i < phone_number.length - 4;i++) {
       psplit[i] = '*';
    }
    answer = psplit.toString().replace(/,/g,''); //replace 정규표현식
    return answer;
}
