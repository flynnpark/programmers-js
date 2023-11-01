function solution(n, s) {
  if (n > s) return [-1];

  const result = [];
  for (let i = n; i > 0; i--) {
    const value = Math.floor(s / i);
    result.push(value);
    s -= value;
  }

  return result;
}

export { solution };
