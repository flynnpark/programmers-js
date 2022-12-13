function solution(k, d) {
  let result = 0;

  for (let y = 0; y <= d; y += k) {
    const maxX = Math.floor(Math.sqrt(d ** 2 - y ** 2));
    result += Math.floor(maxX / k) + 1;
  }

  return result;
}

export { solution };
