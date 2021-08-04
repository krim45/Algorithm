// fs
const [str, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [k, n] = str.split(' ');
let max = Math.max(...arr);
let min = 1;

while (min <= max) {
    var mid = parseInt((min + max) / 2);
    var num = arr.map(v => parseInt(v / mid)).reduce((a, b) => a + b, 0);
    if (num >= n) {
        min = mid + 1;
    } else {
        max = mid - 1;
    }
}
console.log(max);

// readline
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];

rl.on('line', function(line) {
    input.push(line)
}).on('close', () => {
    const [str, ...arr] = input;
    const [k, n] = str.split(' ');
    let max = Math.max(...arr);
    let min = 1;

    while (min <= max) {
      var mid = parseInt((min + max) / 2);
      var num = arr.map(v => parseInt(v / mid)).reduce((a, b) => a + b, 0);
      if (num >= n) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }
    console.log(max)
    process.exit();
})
