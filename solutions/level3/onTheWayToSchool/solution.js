function solution(m, n, puddles) {
  const map = new Array(n).fill(0).map(() => new Array(m).fill(1));
  const denominator = 1_000_000_007;

  for (const [x, y] of puddles) {
    if (x === 1) for (let i = y - 1; i < n; i++) map[i][x - 1] = 0;
    if (y === 1) for (let i = x - 1; i < m; i++) map[y - 1][i] = 0;
    map[y - 1][x - 1] = 0;
  }

  for (let y = 1; y < n; y++) {
    for (let x = 1; x < m; x++) {
      if (!map[y][x]) continue;
      map[y][x] = map[y - 1][x] + map[y][x - 1];
      map[y][x] %= denominator;
    }
  }

  return map[n - 1][m - 1];
}

export { solution };
