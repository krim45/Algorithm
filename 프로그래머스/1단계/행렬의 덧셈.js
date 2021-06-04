function solution(arr1, arr2) {
    var answer = [[]];
    for (let i = 0;i < arr1.length;i++) {
    answer[i] = [];
    for (let n = 0;n < arr1[i].length;n++) {
    answer[i][n] = arr1[i][n] + arr2[i][n]; 
       }
    }
    return answer;
}
