function solution(n, k, enemy) {
  let left = 0;
  let right = enemy.length;

  while (true) {
    if (right - left === 1) break;

    const mid = Math.floor((left + right) / 2);
    const sum =
      mid + 1 - k > 0
        ? enemy
            .slice(0, mid + 1)
            .sort((a, b) => a - b)
            .slice(0, mid + 1 - k)
            .reduce((a, b) => a + b, 0)
        : 0;

    if (n >= sum) {
      left = mid;
    } else {
      right = mid;
    }
  }

  return right;
}

export { solution };
