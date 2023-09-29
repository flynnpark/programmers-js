function solution(n, costs) {
  const isVisited = new Array(n).fill(false);
  const isSelected = new Array(costs.length).fill(false);
  let edges = 0; // 간선 갯수
  let result = 0;

  costs.sort((a, b) => a[2] - b[2]);

  isVisited[costs[0][0]] = true;
  isVisited[costs[0][1]] = true;
  isSelected[0] = true;
  edges += 1;
  result += costs[0][2];

  while (edges < n - 1) {
    for (let i = 1; i < costs.length; i++) {
      const [from, to, cost] = costs[i];

      if (
        !isSelected[i] &&
        ((isVisited[from] && !isVisited[to]) ||
          (!isVisited[from] && isVisited[to]))
      ) {
        isVisited[from] = true;
        isVisited[to] = true;
        isSelected[i] = true;
        result += cost;
        edges += 1;
        break;
      }
    }
  }

  return result;
}

export { solution };
