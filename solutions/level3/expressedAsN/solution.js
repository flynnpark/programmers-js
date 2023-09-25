function solution(N, number) {
  if (N === number) {
    return 1;
  }
  const useCase = Array.from({ length: 9 }, (_, index) =>
    index === 0 ? new Set() : new Set([parseInt(`${N}`.repeat(index), 10)]),
  );
  for (let i = 1; i < 9; i++) {
    for (let j = 1; j < i; j++) {
      for (const firstValue of useCase[j]) {
        for (const secondValue of useCase[i - j]) {
          useCase[i].add(firstValue + secondValue);
          if (firstValue - secondValue > 0) {
            useCase[i].add(firstValue - secondValue);
          }
          if (firstValue * secondValue < number * N) {
            useCase[i].add(firstValue * secondValue);
          }
          if (firstValue % secondValue === 0) {
            useCase[i].add(firstValue / secondValue);
          }
        }
      }
    }
    console.log(i, useCase[i]);
    if (useCase[i].has(number)) return i;
  }
  return -1;
}

export { solution };
