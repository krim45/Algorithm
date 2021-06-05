function solution(phone_number) {
    var answer = '';
    let psplit = phone_number.split('');
    for (let i = 0;i < phone_number.length - 4;i++) {
    psplit[i] = '*';
    }
    answer = psplit.toString().replace(/,/g,''); //replace 정규표현식
    return answer;
}
