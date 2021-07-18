function solution(nums) {
    var answer = 0;
    let filtered = nums.sort((a, b) => a - b).filter((v,i,a) => v != a[i+1])
    if (filtered.length > (nums.length/2)) {
        answer = nums.length / 2;
    } else {
        answer = filtered.length;
    }
    return answer
}

// Set
function solution(nums) {
    const max = [...new Set(nums)].length;
    const min = nums.length/2;
    if (max > nums.length / 2) {
        return min;
    } else {
        return max;
    }
}
