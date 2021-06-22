function solution(n, arr1, arr2) {
    var answer = [];
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = '';
    }
    for (let i = 0; i < n; i++) {
        arr1[i]  = arr1[i].toString(2);
        arr2[i]  = arr2[i].toString(2);
        while (arr1[i].length < n) {
            arr1[i] = '0' + arr1[i];
        }
        while (arr2[i].length < n) {;
            arr2[i] = '0' + arr2[i];
        }
        arr1[i] = arr1[i].replace(/1/gi, '#');
        arr2[i] = arr2[i].replace(/1/gi, '#');
        for (let j = 0; j < n; j++) {
            if (arr1[i][j] === '#' || arr2[i][j] === '#') {
                arr[i] += arr1[i][j].replace('0', '#');
            } else {
                arr[i] += ' ';
            }
        }
    }
    return arr;
}

// 비트연산자를 이용해 간결화
function solution(n, arr1, arr2) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i]  = (arr1[i]|arr2[i]).toString(2);
        while (arr[i].length < n) {
            arr[i] = '0' + arr[i];
        }
        arr[i]  = arr[i].replace(/1/gi, '#').replace(/0/gi, ' ');
    }
    return arr;
}

// 정규식을 사용하지 않는 방법
function solution(n, arr1, arr2) {
    var answer = [];
    let arr = [];
    for (let i = 0; i < n; i++) {
        answer[i] = '';
    }
    for (let i = 0; i < n; i++) {
        arr[i] = (arr1[i]|arr2[i]).toString(2);
        while (arr[i].length < n) {
            arr[i] = '0' + arr[i];
        }
        for (let j = 0; j < n; j++) {
            if (arr[i][j] === '1') {
                answer[i] += '#';
            } else {
                answer[i] += ' ';
            }
        }
    }
    return answer;
}
