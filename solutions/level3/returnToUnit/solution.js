function solution(n, roads, sources, destination) {
  const visited = new Array(n + 1).fill(Infinity);
  const connected = new Array(n + 1).fill(0).map(() => []);

  roads.forEach(([from, to]) => {
    connected[from].push(to);
    connected[to].push(from);
  });

  const queue = [destination];
  visited[destination] = 0;
  while (queue.length) {
    const current = queue.shift();
    for (const next of connected[current]) {
      if (visited[current] + 1 < visited[next]) {
        visited[next] = visited[current] + 1;
        queue.push(next);
      }
    }
  }

  return sources.map((source) =>
    visited[source] !== Infinity ? visited[source] : -1,
  );
}

export { solution };
