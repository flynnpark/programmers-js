function solution(n, times) {
  let min = 1;
  let max = Math.max(...times) * n;
  while (min < max) {
    const mid = Math.floor((min + max) / 2);
    const people = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);
    if (people >= n) max = mid;
    else min = mid + 1;
  }
  return min;
}

export { solution };
