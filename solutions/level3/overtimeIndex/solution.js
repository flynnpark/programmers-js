class Heap {
  constructor() {
    this.heap = [];
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  findParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  findLeftChildIndex(index) {
    return index * 2 + 1;
  }

  findRightChildIndex(index) {
    return index * 2 + 2;
  }

  findParent(index) {
    return this.heap[this.findParentIndex(index)];
  }

  findLeftChild(index) {
    return this.heap[this.findLeftChildIndex(index)];
  }

  findRightChild(index) {
    return this.heap[this.findRightChildIndex(index)];
  }

  size() {
    return this.heap.length;
  }
}

class MaxHeap extends Heap {
  bubbleUp() {
    let index = this.size() - 1;
    while (
      this.findParent(index) &&
      this.findParent(index) < this.heap[index]
    ) {
      this.swap(index, this.findParentIndex(index));
      index = this.findParentIndex(index);
    }
  }

  bubbleDown() {
    let index = 0;
    while (
      (this.findLeftChild(index) &&
        this.findLeftChild(index) > this.heap[index]) ||
      this.findRightChild(index) > this.heap[index]
    ) {
      const largerIndex =
        this.findRightChild(index) > this.findLeftChild(index)
          ? this.findRightChildIndex(index)
          : this.findLeftChildIndex(index);
      this.swap(index, largerIndex);
      index = largerIndex;
    }
  }

  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  poll() {
    if (this.size() === 1) return this.heap.pop();
    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  }
}

function solution(n, works) {
  const worksHeap = new MaxHeap();

  works.forEach((work) => {
    worksHeap.add(work);
  });

  while (n > 0) {
    let currentWork = worksHeap.poll();
    if (currentWork) currentWork--;
    worksHeap.add(currentWork);
    n--;
  }

  return worksHeap.heap
    .map((item) => item ** 2)
    .reduce((acc, current) => acc + current, 0);
}
export { solution };
