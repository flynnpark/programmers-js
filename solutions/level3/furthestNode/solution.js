function solution(n, edge) {
  const graph = Array.from({ length: n + 1 }, () => []);

  edge.forEach((node) => {
    const [from, to] = node;
    graph[from].push(to);
    graph[to].push(from);
  });

  const visited = new Array(n + 1).fill(0);
  const queue = [1];
  visited[1] = 1;

  while (queue.length) {
    const current = queue.shift();
    const nextNodes = graph[current];

    for (const next of nextNodes) {
      if (!visited[next]) {
        queue.push(next);
        visited[next] = visited[current] + 1;
      }
    }
  }

  const maxDistance = Math.max(...visited);

  return visited.filter((item) => item === maxDistance).length;
}

export { solution };
