const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(v => +v);
const N = input.shift();
const result = [];
const heap = new Array(100001);
let heapSize = 0;

const swap = (idx1, idx2) => {
  let tmp = heap[idx1];
  heap[idx1] = heap[idx2];
  heap[idx2] = tmp;
}

// 상향식
const insert = (value) => {
  heap[++heapSize] = value;
  let idx = heapSize;

  while (idx !== 1) {
    let parentIdx = Math.floor(idx / 2)

    if (heap[idx] < heap[parentIdx]) {
      swap(idx, parentIdx);
      idx = parentIdx;
    } else {
      break;
    }
  }
}

// 하향식
const getMin = () => {
  if (!heapSize) return 0
  let result = heap[1];
  heap[1] = heap[heapSize];
  heap[heapSize] = null;
  heapSize--;
  let idx = 1;

  // 최소 heap 추출 후 heap 재구성
  let childIdx;
  while (idx <= heapSize) {
    // 왼쪽 자식 노드 존재
    if (idx * 2 <= heapSize) {
      childIdx = idx * 2;
      // 오른쪽 자식 노드 존재
      if (idx * 2 + 1 <= heapSize) {
        childIdx = heap[idx * 2] > heap[idx * 2 + 1] ? idx * 2 + 1 : childIdx;
      }
    }

    if (heap[idx] > heap[childIdx]) {
      swap(idx, childIdx);
      idx = childIdx;
    } else {
      break;
    }
  }

  return result
}

for (let i = 0; i < input.length; i++) {
  if (input[i]) {
    insert(input[i])
  } else {
    result.push(getMin());
  }
}

console.log(result.join('\n'))
