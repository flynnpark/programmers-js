function solution(t, p) {
  let result = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    const number = Number(t.slice(i, i + p.length));
    if (number <= Number(p)) {
      result++;
    }
  }
  return result;
}

export { solution };
