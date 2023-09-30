function solution(n, cores) {
  if (n < cores.length) {
    return n;
  }

  n = n - cores.length;
  let left = 1;
  let right = (Math.max(...cores) * n) / cores.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let capacity = 0;

    for (const core of cores) {
      capacity += Math.floor(mid / core);
    }

    if (capacity >= n) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  for (const core of cores) {
    n -= Math.floor((left - 1) / core);
  }

  for (let i = 0; i < cores.length; i++) {
    if (left % cores[i] === 0) {
      n--;

      if (n === 0) {
        return i + 1;
      }
    }
  }
}

export { solution };
