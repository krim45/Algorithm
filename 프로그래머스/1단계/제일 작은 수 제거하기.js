function solution(arr) {
    var answer = [];
    let minValue = Math.min.apply(null, arr);
    if (arr.length === 1) {
        answer = [-1];    
    } else {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === minValue) {
            arr.splice(i, 1);
            i--;
            answer = arr;
            }
        }
    }
    return answer;
}
