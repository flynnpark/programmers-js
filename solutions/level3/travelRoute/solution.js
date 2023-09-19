function solution(tickets) {
  const results = [];
  const numOfPoints = tickets.length + 1;
  const check = Array(tickets.length).fill(false);

  const dfs = (path) => {
    if (path.length === numOfPoints) {
      results.push(path);
      return;
    }
    for (const index in tickets) {
      const [from, to] = tickets[index];
      if (from === path[path.length - 1] && !check[index]) {
        check[index] = true;
        dfs([...path, to]);
        check[index] = false;
      }
    }
  };

  dfs(['ICN']);

  return results.sort().at(0);
}

export { solution };
