function solution(d, budget) {
  const sorted = d.sort((a, b) => a - b);
  let result = 0;
  let currentTotal = 0;

  for (const item of sorted) {
    currentTotal += item;

    if (currentTotal <= budget) {
      result++;
    } else {
      break;
    }
  }

  return result;
}

export { solution };
