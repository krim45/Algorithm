// fs
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
input.shift();

for (let i = 0; i < input.length; i += 2) {
    let [n, m] = input[i].trim().split(' ').map(Number);
    let stack = input[i+1].trim().split(' ').map(Number);
    stack[m] += '';
    let count = 0;

    while (stack.length > 0) {
        if (stack[0] == Math.max(...stack)) {
            count++;
            if (typeof stack[0] == 'string') {
                console.log(count);
                break;
            }
            stack.shift();
        } else {
            stack.push(stack.shift());
        }
    }
}

// readline
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', () => {
    input.shift();
    
    for (let i = 0; i < input.length; i += 2) {
        let [n, m] = input[i].trim().split(' ').map(Number);
        let stack = input[i+1].trim().split(' ').map(Number);
        
        stack[m] += '';
        let count = 1;

        while (stack.length > 0) {
          if (stack[0] == Math.max(...stack)) {
            if (typeof stack[0] == 'string') {
              console.log(count);
              break;
            }
            stack.shift();
            count++;
          } else {
            stack.push(stack.shift());
          }
        }
    }
    
    process.exit();  
})
