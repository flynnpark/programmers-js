function solution(k, m, score) {
  let result = 0;
  score.sort((a, b) => b - a);

  for (let i = 0; i < score.length; i += m) {
    const chunk = score.slice(i, i + m);
    if (chunk.length === m) {
      result += Math.min(...chunk) * m;
    }
  }

  return result;
}

export { solution };
