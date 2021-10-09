const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const N = input.shift();
const answer = [];
const heap = [0];
const root = 1;
let size = 0;

const swap = (idx1, idx2) => {
  let tmp = heap[idx1];
  heap[idx1] = heap[idx2];
  heap[idx2] = tmp;
}

const parent = (idx) => Math.floor(idx / 2);
const leftChild = (idx) => idx * 2;
const rightChild = (idx) => idx * 2 + 1;

const insert = (el) => {
  heap[++size] = el;
  let index = size;

  while (index > 1) {
    let parentIdx = parent(index);

    if (heap[parentIdx] < heap[index]) {
      swap(parentIdx, index);
      index = parentIdx;
    } else {
      break;
    }
  }
}

const getMax = () => {
  if (size === 0) return 0;
  let result = heap[1];
  let index = 1;
  heap[index] = heap.pop();
  size--;

  while (index <= size) {
    if (leftChild(index) <= size) {
      let childIdx = leftChild(index);

      if (rightChild(index) <= size) {
        childIdx = heap[leftChild(index)] > heap[rightChild(index)] ? leftChild(index) : rightChild(index);
      }

      if (heap[childIdx] > heap[index]) {
        swap(childIdx, index);
        index = childIdx;
      } else {
        break;
      }
    } else {
      break;
    }
  }

  return result
}

for (let i = 0; i < input.length; i++) {
  if (input[i] === 0) {
    answer.push(getMax());
  } else {
    insert(input[i]);
  }
}

console.log(answer.join('\n'));
