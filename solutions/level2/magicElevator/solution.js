function solution(storey) {
  let result = 0;

  while (storey) {
    const temp = storey % 10;
    storey = Math.floor(storey / 10);
    if (temp > 5) {
      result += 10 - temp;
      storey++;
    } else if (temp === 5 && storey >= 10 && storey % 10 >= 5) {
      result += 5;
      storey++;
    } else {
      result += temp;
    }
  }

  return result;
}

export { solution };
