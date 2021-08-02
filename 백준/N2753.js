const fs = require('fs');
const input = fs.readFileSync('/dev/stdin');
const a = input % 4;
const b = input % 100;
const c = input % 400;
if ((a === 0 && b !== 0) || c === 0) {
    console.log(1);
}
else {
    console.log(0);
}
