function solution(s) {
    var answer = '';
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        arr[i] = s[i];
    }
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (arr[i].charCodeAt(0) > arr[j].charCodeAt(0)) {
                let a = arr[i];
                arr[i] = arr[j];
                arr[j] = a;
            }
         }
    }
    for (let i = 0; i < s.length; i++) {
        answer += arr[i];
    }
    return answer;
}

//

function solution(s) {
    var answer = '';
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        arr[i] = s[i];
    }
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length - 1; j++) {
            if (arr[j].charCodeAt(0) < arr[j + 1].charCodeAt(0)) {
                let a = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = a;
            }
         }
    }
    for (let i = 0; i < s.length; i++) {
        answer += arr[i];
    }
    return answer;
}
