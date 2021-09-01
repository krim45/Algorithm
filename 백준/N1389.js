function solution(input) {
    let arr = input.map(v => v.trim().split(' ').map(Number));
    const [N, M] = arr.shift();
    let graph = Array.from(Array(N + 1), () => new Array(N + 1).fill(false));
    let visited = new Array(N + 1).fill(false);

    for (let i = 0; i < M; i++) {
        const [a, b] = arr[i];
        graph[a][b] = true;
        graph[b][a] = true;
    }

    let result = [];
    let queue = [];
    let step = new Array(N + 1).fill(0);

    function bfs(x) {
        queue.push(x);
        while (queue.length > 0) {
            let start = queue.shift();
            visited[start] = true;
            graph[start].forEach((v, i) => {
                if (v && !visited[i]) {
                    queue.push(i);
                    step[i] = step[start] + 1;
                    visited[i] = true;
                }
            });
        }
    }
    
    for (let i = 1; i <= N; i++) {
        step = new Array(N + 1).fill(0);
        visited = new Array(N + 1).fill(false);
        bfs(i);
        let sum = step.reduce((acc, cur) => acc + cur);
        result.push(sum)
    }
    
    console.log(result.indexOf(Math.min(...result)) + 1);
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
