const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = +input[0];

function solution(input) {
    let result = [];
    let state = true;

    for (let i = 1; i < input.length; i += 3) {
        let func = input[i].replace(/RR/gi, '');
        let arr = input[i + 2].replace(/\]|\[/gi, '').split(',').filter(v => v !== '').map(v => +v);

        for (let j = 0; j < func.length; j++) {
            if (func[j] === 'R') {
                if (state) {
                    state = false;
                } else {
                    state = true;
                }
            }

            if (func[j] === 'D') {
                if (arr.length === 0) {
                    result.push('error');
                    break;
                } else {
                    if (state) {
                        arr.shift();
                    } else {
                        arr.pop();
                    }
                }
            }
        }
      
        if (!state) {
            arr.reverse();
        }
        state = true;
      
        if (result.length === parseInt(i - 1)/3) {
            result.push(`[${arr}]`);
        }
    }
    
    console.log(result.join('\n'))
}

solution(input);
