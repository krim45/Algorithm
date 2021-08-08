// fs
const N = +require('fs').readFileSync('/dev/stdin').toString().trim();

const queue = [];

for (let i = 1; i <= N; i++) {
    queue.push(i);
}

let head = 0;

while (queue.length - head !== 1) {
    head++;
    queue.push(queue[head]);
    head++
}

console.log(queue[head]);

// readline
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', function(line) {
    input.push(line);
}).on('close', () => {
    const N = +input[0];
    const queue = [];
    
    for (let i = 1; i <= N; i++) {
        queue.push(i);
    }
    
    let head = 0;
    
    while (queue.length - head !== 1) {
        head++;
        queue.push(queue[head]);
        head++
    }
    
    console.log(queue[head]);
    process.exit();
});

// LinkedList 구현하는 방법
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.scale = 0;
    }
    
    link(value) {
        const node = new Node(value);
        
        if (!this.head) {
            this.head = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
        }
        
        this.tail = node;
        this.scale++;
        
        return node;
    }
    
    removeHead() {
        this.head = this.head.next;
        this.head.prev = null;
        this.scale--;
    }
}

function getLastCard(n) {
    const cards = new LinkedList();
    
    for (let i = 1; i <= n; i++) {
        cards.link(i);
    }
    
    while(cards.scale !== 1) {
        cards.removeHead();
        cards.link(cards.head.value);
        cards.removeHead();
    }
    
    return cards.head.value;
}

rl.on('line', function(line) {
    input.push(line);
}).on('close', () => {
    const N = +input[0];
    const card = getLastCard(N);
    
    console.log(card);
    process.exit();
});
