function solution(sequence, k) {
  let result = [0, 0];
  const length = sequence.length;
  let right = 0;
  let sum = 0;
  let prevDistance = k;

  for (let left = 0; left < length; left++) {
    while (right < length && sum < k) {
      sum += sequence[right++];
    }
    const currentRight = right - 1;
    if (sum === k && currentRight - left < prevDistance) {
      result = [left, currentRight];
      prevDistance = currentRight - left;
    }
    sum -= sequence[left];
  }

  return result;
}

export { solution };
