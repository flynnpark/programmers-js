function getDivisors(total) {
  const result = [];
  for (let i = 3; i <= total ** 0.5; i++) {
    if (total % i === 0) {
      result.push(i);
      if (i !== total / i) {
        result.push(total / i);
      }
    }
  }
  return result.sort((a, b) => a - b);
}

function solution(brown, yellow) {
  const total = brown + yellow;
  const divisors = getDivisors(total);

  for (let i = 0; i < divisors.length; i++) {
    const height = divisors[i];
    const width = total / height;
    if ((height - 2) * (width - 2) === yellow) {
      return [width, height];
    }
  }

  return [];
}

export { solution };
