const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => +v);

if (input[0] >= 90) {
    console.log('A');
}
else if (input[0] >= 80) {
    console.log('B');
}
else if (input[0] >= 70) {
    console.log('C');
}
else if (input[0] >= 60) {
    console.log('D');
}
else if (input[0] < 60) {
    console.log('F');
}
