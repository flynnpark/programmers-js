function solution(targets) {
  let result = 0;
  let bound = 0;

  targets
    .sort((a, b) => a[0] - b[0])
    .forEach(([start, end]) => {
      if (bound > start) {
        bound = Math.min(bound, end);
      } else {
        bound = end;
        result++;
      }
    });

  return result;
}

export { solution };
