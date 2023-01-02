function solution(queue1, queue2) {
  let result = 0;
  const max = queue1.length * 3;
  let [i1, i2] = [0, 0];
  let diff = queue1.reduce((acc, cur, idx) => acc + cur - queue2[idx], 0) / 2;

  while (result < max) {
    if (diff > 0) {
      const value = queue1[i1];
      i1++;
      diff -= value;
      queue2.push(value);
    } else if (diff < 0) {
      const value = queue2[i2];
      i2++;
      diff += value;
      queue1.push(value);
    } else {
      break;
    }
    result++;
  }
  return diff !== 0 ? -1 : result;
}

export { solution };
