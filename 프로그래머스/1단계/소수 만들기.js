function solution(nums) {
    var answer = 0;
    let count = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                for (let l = 2; l < (nums[i] + nums[j] + nums[k]); l++) {
                    if ((nums[i] + nums[j] + nums[k]) % l === 0) {
                        break;
                    } else if ((nums[i] + nums[j] + nums[k]) % l !== 0) {
                        count++;
                        if (count + 2 === (nums[i] + nums[j] + nums[k])) {
                        answer++;
                        }
                    }
                }
                count = 0;
            }
        }
    }
    return answer;
}

// 더 효율적인 방식
function primeNumber(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true;
}

function solution(nums) {
    var answer = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
               if (primeNumber(nums[i] + nums[j] + nums[k])) {
                   answer++;
               }
            }
        }
    }
    return answer;
}
