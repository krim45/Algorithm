const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => +v);

const [a, b] = inputs;

if(a > b) {
    console.log('>');
}
else if (a < b) {
    console.log('<');
}
else if (a === b) {
    console.log('==')
}
