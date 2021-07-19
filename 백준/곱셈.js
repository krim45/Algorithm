const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().split('\n');

const [a, b] = inputs;

const c = b.split('');

console.log(a * c[2]);
console.log(a * c[1]);
console.log(a * c[0]);
console.log(a * b);
