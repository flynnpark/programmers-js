function solution(k, ranges) {
  const numbers = collatz(k);
  const dp = new Array(k).fill(null);
  console.log(numbers);
  for (let i = 0; i < numbers.length - 1; i++) {
    dp[i] = (numbers[i] + numbers[i + 1]) / 2;
  }

  return ranges.map(([start, offset]) => {
    const end = numbers.length - 1 + offset;
    if (end < start) return -1;
    return dp.slice(start, end).reduce((acc, curr) => acc + curr, 0);
  });
}

function collatz(k) {
  const result = [k];
  while (k !== 1) {
    if (k % 2) {
      k = k * 3 + 1;
    } else {
      k /= 2;
    }
    result.push(k);
  }
  return result;
}

export { solution };
