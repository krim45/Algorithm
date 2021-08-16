// fs
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
input = input.map(v => v.split(' '));
input.sort((a, b) => {
    a = parseInt(a[0]);
    b = parseInt(b[0]);
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
});
let result = input.map(v => v.join(' ')).join('\n'); 
console.log(result);
