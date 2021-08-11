// fs
const [num, arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = num.split(' ').map(Number);
let cards = arr.split(' ').map(Number);
let max = 0;

for (let i = 0; i < cards.length - 2; i++) {
    for (let j = i + 1; j < cards.length - 1; j++) {
        for (let k = j + 1; k < cards.length; k++) {
            let number = cards[i] + cards[j] + cards[k];
            if (number <= M) {
                max = Math.max(number, max);
            }
        }
    }
}

console.log(max);

// readline
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', () => {
    let [num, arr] = input;
    let [N, M] = num.split(' ').map(Number);
    let cards = arr.split(' ').map(Number);
    let max = 0;
    
    for (let i = 0; i < cards.length - 2; i++) {
      for (let j = i + 1; j < cards.length - 1; j++) {
        for (let k = j + 1; k < cards.length; k++) {
          let number = cards[i] + cards[j] + cards[k];
          if (number <= M) {
            max = Math.max(number, max);
          }
        }
      }
    }
    
    console.log(max);
    process.exit();    
});
