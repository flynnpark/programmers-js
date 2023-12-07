function solution(a) {
  let result = 0;
  const minimum = a.reduce(
    (acc, current) => (acc <= current ? acc : current),
    Infinity,
  );

  let leftMinimum = Infinity;
  for (let left = 0; left < a.length; left++) {
    if (a[left] === minimum) break;
    if (a[left] < leftMinimum) {
      result++;
      leftMinimum = a[left];
    }
  }

  let rightMinimum = Infinity;
  for (let right = a.length - 1; right > 0; right--) {
    if (a[right] === minimum) break;
    if (a[right] < rightMinimum) {
      result++;
      rightMinimum = a[right];
    }
  }

  return result + 1;
}

export { solution };
