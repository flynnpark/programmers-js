function solution(n, left, right) {
  return new Array(right - left + 1)
    .fill(0)
    .map((_, index) =>
      Math.max(parseInt((left + index) / n) + 1, ((left + index) % n) + 1)
    );
}

export { solution };
