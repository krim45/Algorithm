function solution(k, dungeons) {
    let result = [];
    let max = 0;
    
    const combination = (arr, bucket, num) => {
        if (num === 0) {
            result.push(bucket)
            return
        }
        
        arr.forEach((fix, i) => {
            const sliceArr = arr.slice();
            sliceArr.splice(i, 1);
            combination(sliceArr, bucket.concat([fix]), num - 1);
        })
    }
    combination(dungeons, [], dungeons.length)
    
    const check = (k, arr) => {
        let answer = 0;
        for (let i = 0; i < arr.length; i++) {
            if (k >= arr[i][0]) {
                answer++;
                k -= arr[i][1];
            }
        }
        return answer
    }
    
    for (let i = 0; i < result.length; i++) {
        max = Math.max(max, check(k, result[i]));
    }
    
    return max;
}
