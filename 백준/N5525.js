// 100점
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input[0];
const M = +input[1];
const S = input[2];
let count = 0;

function solution(input) {
    for (let i = 0; i < M - 2; i++) {
        if (S[i] === 'I') {
            let number = 0;
            while(S[i+1] === 'O' && S[i+2] === 'I') {
                i += 2;
                number++;
                if (number === N) {
                    count++;
                    number--;
                }
            }
        }
    }
    console.log(count);
}

solution(S);

// 50점
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input[0];
const M = +input[1];
const S = input[2];
let Pn = '';
let count = 0;

for (let i = 0; i < N; i++) {
    Pn += 'IO';
}
Pn += 'I';

let len = Pn.length;
let kmp = BigInt(0);

function solution(input) {
    let hash = BigInt(0);

    if (len > M) {
        console.log(0);
        return;
    }

    for (let i = 0; i < len; i++) {
        kmp += BigInt(Pn.charCodeAt(i) * (2 ** (len - 1 - i)));
        hash += BigInt(S.charCodeAt(i) * (2 ** (len - 1 - i)));
    }
    
    if (hash === kmp) {
        count++;
    }

    for (let i = len; i < M; i++) {
        hash -= BigInt(S.charCodeAt(i - len) * (2 ** (len - 1)));
        hash *= BigInt(2);
        hash += BigInt(S.charCodeAt(i));
        if (hash === kmp) {
                count++;
        }
    }
    console.log(count);
}

solution(S);
