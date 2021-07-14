function solution(n) {
    var answer = 0;
    let bio = n.toString(2);
    let len = n.toString(2).length;
    let count1 = 0;
    for (let j = 0; j < len; j++) {
        if (bio[j] === '1') {
            count1++;
        }
    }
    let count2 = 0;
    let newBio = '';
    for (let i = 1; i <= n ; i++) {
        newBio = (n+i).toString(2);
        for (let j = 0; j < newBio.length; j++) {
            if (newBio[j] === '1') {
                count2++;
            }
        }
        if (count1 === count2) {
            answer = n + i;
            break;    
        }
        count2 = 0;
    }
    return answer;
}

// match, 재귀함수
function solution(n,a=n+1) {
    return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length ? a : solution(n,a+1);
}
