function solution(numbers) {
  const sortedNumbers = numbers
    .map((number) => `${number}`)
    .sort((a, b) => b + a - (a + b));

  return sortedNumbers.every((str) => str === '0')
    ? '0'
    : sortedNumbers.join('');
}

export { solution };
