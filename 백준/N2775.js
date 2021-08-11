// fs
const [T, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function loop(n) {
  n = n.map((v, ind, a) => {
    for (let i = 1; i <= ind; i++) {
      v += a[i - 1]
    }
    return v
  });
  return n
}

let result = [];

for (let i = 0; i < arr.length; i += 2) {
    let [k, n] = [arr[i], arr[i+1]];
    let num = [];

    for (let i = 1; i <= n; i++) {
        num.push(i);
    }

    while (k) {
        num = loop(num);
        k--;
    }

    result.push(num[num.length -1]);
}

console.log(result.join('\n'));

// readline
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

function loop(n) {
  n = n.map((v, ind, a) => {
    for (let i = 1; i <= ind; i++) {
      v += a[i - 1]
    }
    return v
  });
  return n
}

rl.on('line', function (line) {
    input.push(line);
}).on('close', () => {
    let [T, ...arr] = input;
    let result = [];
    
    for (let i = 0; i < arr.length; i += 2) {
        let [k, n] = [arr[i], arr[i+1]];
        let num = [];
        
        for (let i = 1; i <= n; i++) {
            num.push(i);
        }
        
        while (k) {
              num = loop(num);
              k--;
        }
        
        result.push(num[num.length -1]);
    }
    
    console.log(result.join('\n'));
    process.exit();
});
