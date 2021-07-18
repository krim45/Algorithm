function has(Arr, value) {
    for (let i = 0; i < Arr.length; i++) {
        if (Arr[i] === value) {
            return true
        } else {
            return false
        }
    }
}

function solution(numbers) {
    let arr = [0];
    let k = 0;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; i + j < numbers.length; j++) {
            if (has(arr, numbers[i] + numbers[i + j]) === false) {
                arr[k] = numbers[i] + numbers[i + j];
                k++;
            }
        }
    }
    arr = arr.sort((a, b) => a - b).filter((v, i) => arr[i] !== arr[i + 1]);
    return arr;
}

// 정리
function solution(numbers) {
    let arr = [0];
    let k = 0;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (!arr.includes(numbers[i] + numbers[j])) {
                arr[k] = numbers[i] + numbers[j];
                k++;
            }
        }
    }
    arr = arr.sort((a, b) => a - b);
    return arr;
}
