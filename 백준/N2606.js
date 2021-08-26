// dfs
function solution(input) {
    const N = +input.shift();
    const M = +input.shift();
    
    let graph = Array.from(Array(N+1), () => new Array(N+1).fill(false));
    let visited = new Array(N+1).fill(false);
    
    for (let i = 0; i < input.length; i++) {
        const [a, b] = input[i].split(' ').map(Number);
        graph[a][b] = true;
        graph[b][a] = true;
    }
    
    let stack = [];
    
    function dfs(x) {
        if (visited[x]) {
            return;
        }
        visited[x] = true;
        stack.push(x);
        graph[x].map((v, i) => {
            if (v && !visited[i]) {
                dfs(i);
            }
        });
    }
    dfs(1);
    
    console.log(stack.length - 1);
}

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', () => {
    solution(input);
    process.exit();
});


// bfs
function solution(input) {
    const N = +input.shift();
    const M = +input.shift();
    
    let graph = Array.from(Array(N+1), () => new Array(N+1).fill(false));
    let visited = new Array(N+1).fill(false);
    
    for (let i = 0; i < input.length; i++) {
        const [a, b] = input[i].split(' ').map(Number);
        graph[a][b] = true;
        graph[b][a] = true;
    }
    
    let queue = [];
    let result = [];
    
    function bfs(x) {
        queue.push(x);
        while (queue.length > 0) {
            let start = queue.shift();
            result.push(start);
            visited[start] = true;
            graph[start].map((v, i) => {
                if (v && !visited[i]) {
                    queue.push(i);
                    visited[i] = true;
                }
            });
        }
    }
    bfs(1);
    
    console.log(result.length - 1);
}

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', () => {
    solution(input);
    process.exit();
});
