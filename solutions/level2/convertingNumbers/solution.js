function solution(x, y, n) {
  if (x === y) return 0;

  const dp = {};
  dp[x] = 0;

  let data = [x];

  while (data.length) {
    const newData = [];
    for (const item of data) {
      for (const next of [item + n, item * 2, item * 3]) {
        if (next > y || dp[next]) continue;
        if (next === y) return dp[item] + 1;
        dp[next] = dp[item] + 1;
        newData.push(next);
      }
    }
    data = newData;
  }

  return -1;
}

export { solution };
