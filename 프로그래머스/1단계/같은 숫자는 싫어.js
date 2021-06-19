function solution(arr) {
    var answer = [];
    let count = 1;
    answer[0] = arr[0]
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1]) {
            answer[count] = arr[i + 1];
            count++;
        }
    }
    return answer;
}

// filter 메서드
function solution(arr) {
    return arr.filter((val,index) => val !== arr[index+1]);
}
