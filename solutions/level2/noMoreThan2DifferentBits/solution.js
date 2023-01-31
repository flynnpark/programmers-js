function solution(numbers) {
  const result = [];

  for (let number of numbers) {
    if (number % 2 === 0) {
      result.push(number + 1);
    } else {
      let diff = 2;
      while (true) {
        if ((number + 1) % (diff * 2) === 0) diff = diff * 2;
        else break;
      }
      result.push(number + diff / 2);
    }
  }

  return result;
}

export { solution };
