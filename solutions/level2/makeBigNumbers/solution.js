function solution(number, k) {
  const result = [];

  for (let num of number) {
    while (
      k > 0 &&
      result.length > 0 &&
      Number(result[result.length - 1]) < Number(num)
    ) {
      result.pop();
      k--;
    }
    result.push(num);
  }

  while (k > 0) {
    result.pop();
    k--;
  }

  return result.join('');
}

export { solution };
