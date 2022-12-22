function solution(data, col, row_begin, row_end) {
  return data
    .sort((a, b) => {
      const aValue = a[col - 1];
      const bValue = b[col - 1];
      if (aValue === bValue) {
        return b[0] - a[0];
      }
      return aValue - bValue;
    })
    .map((item, index) => {
      const sum = item
        .map((num) => num % (index + 1))
        .reduce((a, b) => a + b, 0);
      return sum;
    })
    .slice(row_begin - 1, row_end)
    .reduce((a, b) => a ^ b, 0);
}

export { solution };
