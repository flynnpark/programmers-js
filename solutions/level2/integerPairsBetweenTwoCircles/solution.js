function solution(r1, r2) {
  let result = 0;

  for (let x = 1; x <= r2; x++) {
    const maxY = Math.floor(Math.sqrt(r2 ** 2 - x ** 2));
    const minY = r1 <= x ? 0 : Math.ceil(Math.sqrt(r1 ** 2 - x ** 2));

    result += maxY - minY + 1;
  }
  return result * 4;
}

export { solution };
