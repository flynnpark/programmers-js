function solution(s) {
  let count = 0;
  let numOfZeros = 0;
  while (s !== '1') {
    count++;
    s = s
      .split('')
      .filter((item) => {
        if (item != '0') {
          return true;
        }
        numOfZeros++;
        return false;
      })
      .length.toString(2);
  }
  return [count, numOfZeros];
}

export { solution };
