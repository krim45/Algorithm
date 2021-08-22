function solution(input) {
    let hash = 0;
    let power = 1;
    
    for (let i = 0; i < input[1].length; i++) {
        hash += (input[1].charCodeAt(i) - 96) * power % 1234567891;
        power = power * 31 % 1234567891;
    }
    
    console.log(hash % 1234567891);
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
solution(input);
