// fs
let [n, arr, m, check] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
arr = arr.split(' ').map(Number).sort((a,b) => a - b);;
check = check.split(' ').map(Number);

let result = [];

for (let i = 0; i < check.length; i++) {
  let min = 0;
  let max = arr.length - 1;
  let bol = 0;

  while (min <= max) {
    let mid = parseInt((min + max) / 2);
    if (check[i] === arr[mid]) {
      bol = 1;
      result.push(1);
      break;
    } else if (check[i] < arr[mid]) {
      max = mid - 1;
    } else if (check[i] > arr[mid]) {
      min = mid + 1;
    }
  }
  if (bol === 0) {
      result.push(0)
  }
}

console.log(result.join("\n"))


//readline
let rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', () => {
    let [n, arr, m, check] = input
    arr = arr.split(' ').map(Number).sort((a,b) => a - b);;
    check = check.split(' ').map(Number);
    let result = [];

    for (let i = 0; i < check.length; i++) {
      let min = 0;
      let max = arr.length - 1;
      let bol = 0;

      while (min <= max) {
        let mid = parseInt((min + max) / 2);
        if (check[i] === arr[mid]) {
          bol = 1;
          result.push(1);
          break;
        } else if (check[i] < arr[mid]) {
          max = mid - 1;
       } else if (check[i] > arr[mid]) {
          min = mid + 1;
        }
      }
      if (bol === 0) {
          result.push(0)
      }
    }
    console.log(result.join("\n"))
    process.exit();
})
