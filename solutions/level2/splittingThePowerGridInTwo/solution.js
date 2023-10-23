function solution(n, wires) {
  return wires.reduce((prevResult, [currentFrom, currentTo]) => {
    const connection = {};
    for (let i = 1; i <= n; i++) connection[i] = [];

    wires.forEach(([from, to]) => {
      if (!(currentFrom === from && currentTo === to)) {
        connection[from].push(to);
        connection[to].push(from);
      }
    });

    const queue = [1];
    const visited = [];
    while (queue.length) {
      const current = queue.shift();
      if (!visited.includes(current)) {
        queue.push(...connection[current]);
        visited.push(current);
      }
    }

    return Math.min(prevResult, Math.abs(n - 2 * visited.length));
  }, n);
}

export { solution };
