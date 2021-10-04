const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', () => {
    const N = +input.shift();
    input = input.map(v => v.split(''));
    const inputRed = JSON.parse(JSON.stringify(input)).map(v => v.map(x => {
        if (x === 'G') {
            return 'R'
        }
        return x
    }));
    const x1 = [-1, 1, 0, 0];
    const y1 = [0, 0, -1, 1];
    let vistied = Array.from(Array(N), () => new Array(N).fill(false));
    let queue = [];
    let distruct = 0;
    let idx = 0;
    let result = [];
    
    const solution = (input) => {
        const bfs = (y, x, arr) => {
            const color = arr[y][x];
            queue.push([y, x]);
            vistied[y][x] = true;
            distruct++;

            while (queue.length > idx) {
                let [startY, startX] = queue[idx++];

                for (let i = 0; i < 4; i++) {
                    let [Y, X] = [startY + y1[i], startX + x1[i]];

                    if (0 <= Y && Y < N && 0 <= X && X < N && !vistied[Y][X] && color === arr[Y][X]) {
                        vistied[Y][X] = true;
                        queue.push([Y, X]);
                    }
                }
            }
        }

        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                if (!vistied[i][j]) {
                    bfs(i, j, input);
                }
            }
        }
      
        result.push(distruct)
        vistied = Array.from(Array(N), () => new Array(N).fill(false));
        queue = [];
        distruct = 0;
        idx = 0;
        
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                if (!vistied[i][j]) {
                    bfs(i, j, inputRed);
                }
            }
        }
      
        result.push(distruct)
        console.log(result.join(' '));
    }
    
    solution(input);
    process.exit();
});
