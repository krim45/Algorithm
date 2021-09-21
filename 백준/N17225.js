const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(v => v.split(' '));
const [B, R, N] = [...input.shift()].map(v => +v);

function solution(input) {
    let blueQ = [];
    let redQ = [];
    let timeB = 0;
    let timeR = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i][1] === 'B') {
            timeB = 0;

            for (let j = 0; j < +input[i][2]; j++) {
                if (blueQ.length > 0 && +input[i][0] + timeB < blueQ[blueQ.length - 1][2]) {
                    blueQ.push([blueQ[blueQ.length - 1][2], 'B', blueQ[blueQ.length - 1][2] + B]);
                }
                else {
                    blueQ.push([+input[i][0] + timeB, 'B', +input[i][0] + timeB + B]);
                }
                timeB += B;
            }
        }

        if (input[i][1] === 'R') {
            timeR = 0;

            for (let j = 0; j < +input[i][2]; j++) {
                let startTime = +input[i][0] + timeR;

                if (redQ.length > 0 && startTime < redQ[redQ.length - 1][2]) {
                    redQ.push([redQ[redQ.length - 1][2], 'R', redQ[redQ.length - 1][2] + R]);
                }
                else {
                    redQ.push([startTime, 'R', startTime + R]);
                }
                timeR += R;
            }
        }
    }
    
    let order = [...blueQ, ...redQ];
    let blue = [];
    let red = [];

    order.sort((a,b) => {
        if (a[0] - b[0] === 0) {
            if (a[1] === 'B') {
                return -1
            }
            return 1;
        }
        return a[0] - b[0];
    })

    for (let i = 0; i < order.length; i++) {
        if (order[i][1] === 'B') {
            blue.push(i + 1);
        } else {
            red.push(i + 1);
        }
    }
    // console.log(order);
    // console.log(blueQ);
    // console.log(redQ);
    console.log(`${blue.length}\n${blue.join(' ')}\n${red.length}\n${red.join(' ')}`);
}

solution(input);
