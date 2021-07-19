const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => +v);

const [a, b, c] = inputs;

console.log((a+b)%c);
console.log(((a%c)+(b%c))%c);
console.log((a*b)%c);
console.log(((a%c)*(b%c))%c);
