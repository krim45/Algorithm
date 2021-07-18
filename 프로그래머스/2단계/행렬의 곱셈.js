function solution(arr1, arr2) {
    var answer = [];
    let arr = [];
    let sum = 0;
    
    for (let k = 0; k < arr1.length; k++) {
        for (let j = 0; j < arr2[0].length; j++) {
            for (let i = 0; i < arr1[k].length; i++) {
                sum += (arr1[k][i] * arr2[i][j]);
            }
            arr.push(sum);
            sum = 0;
        }
        answer.push(arr);
        arr = [];
    }
    return answer;
}

// map(), reduce()
function solution(arr1, arr2) {
    return arr1.map((v) => arr2[0].map((x,y) => v.reduce((a,b,c) => a + b * arr2[c][y], 0)))
}
