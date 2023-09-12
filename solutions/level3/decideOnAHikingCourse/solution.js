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

class MinHeap extends Heap {
  bubbleUp() {
    let index = this.size() - 1;
    while (
      this.findParent(index) &&
      this.findParent(index) > this.heap[index]
    ) {
      this.swap(index, this.findParentIndex(index));
      index = this.findParentIndex(index);
    }
  }

  bubbleDown() {
    let index = 0;
    while (
      this.findLeftChild(index) &&
      (this.findLeftChild(index) < this.heap[index] ||
        this.findRightChild(index) < this.heap[index])
    ) {
      const smallerIndex =
        this.findRightChild(index) < this.findLeftChild(index)
          ? this.findRightChildIndex(index)
          : this.findLeftChildIndex(index);
      this.swap(index, smallerIndex);
      index = smallerIndex;
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

function solution(n, paths, gates, summits) {
  // n: 지점 갯수
  // paths: [출발지, 도착지, 걸리는 시간]
  // gates: 출발지
  // summits: 도착지
  const result = [n, Infinity];
  const hikingTrail = Array.from({ length: n + 1 }, () => []);
  const isSummits = Array.from({ length: n + 1 }, () => false);
  summits.sort((a, b) => a - b);

  paths.forEach((path) => {
    const [i, j, w] = path;
    hikingTrail[i].push([j, w]);
    hikingTrail[j].push([i, w]);
  });
  summits.forEach((summit) => {
    isSummits[summit] = true;
  });

  function dijkstra() {
    const minHeap = new MinHeap();
    const intensity = Array(n + 1).fill(Infinity);
    gates.forEach((gate) => {
      minHeap.add([gate, 0]);
      intensity[gate] = 0;
    });

    while (minHeap.size()) {
      const [vertex, cost] = minHeap.poll();

      if (intensity[vertex] < cost) continue;
      if (isSummits[vertex]) continue;

      const adjList = hikingTrail[vertex];
      const adjListLen = adjList.length;

      for (let i = 0; i < adjListLen; i++) {
        const [nextVertex, nextCost] = adjList[i];

        if (intensity[nextVertex] > Math.max(intensity[vertex], nextCost)) {
          intensity[nextVertex] = Math.max(intensity[vertex], nextCost);
          minHeap.add([nextVertex, intensity[nextVertex]]);
        }
      }
    }

    return intensity;
  }

  const intensity = dijkstra();

  summits.forEach((summit) => {
    if (intensity[summit] < result[1]) {
      result[0] = summit;
      result[1] = intensity[summit];
    }
  });

  return result;
}

export { solution };
