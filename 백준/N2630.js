const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input.shift();

function solution(input) {
    let paper = input.map(v => v.split(' ').map(Number));
    let count = {'0': 0, '1': 0};

    function check(startY, endY, startX, endX) {
        for (let i = startY; i < endY; i++) {
            for (let j = startX; j < endX; j++) {
                if (paper[startY][startX] !== paper[i][j]) {
                    check(startY, startY + (endY - startY) / 2, startX, startX + (endX - startX ) / 2);
                    check(startY + (endY - startY) / 2, endY, startX, startX + (endX - startX ) / 2);
                    check(startY, startY + (endY - startY) / 2, startX + (endX - startX ) / 2, endX);
                    check(startY + (endY - startY) / 2, endY, startX + (endX - startX ) / 2, endX);
                    return;
                }
            }
        }
        count[paper[startY][startX]] += 1;
        return;
    }

    check(0, N, 0, N);
    console.log(count['0'] + '\n' + count['1']);
}

solution(input);
