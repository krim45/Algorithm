// 큐
function solution(input) {
    const [N, K] = input;
    let arr = [];
    let result = [];
    
    for (let i = 1; i <= input[0]; i++) {
        arr.push(i);
    }
    
    let count = 1;
    while (arr.length > 0) {
        if (count === K) {
            result.push(arr.shift());
            count = 1;
        } else {
            arr.push(arr.shift());
            count++;
        }
    }
    
    console.log('<' + result.join(', ') + '>')
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
solution(input);

// index를 이용한 방식
function solution(input) {
    let arr = [];
    let result = [];
    
    for (let i = 1; i <= input[0]; i++) {
        arr.push(i);
    }
    
    let index = input[1] - 1;
    
    while (arr.length > 0) {
        if (index > arr.length - 1) {
            index %= arr.length;
        }
        result.push(arr.splice(index, 1));
        index += input[1] - 1;
    }
    
    console.log('<' + result.join(', ') + '>')
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
solution(input);
