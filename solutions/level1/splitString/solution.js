function solution(s) {
  let result = 0;
  let firstLetter = null;
  let countX = 0;
  let countY = 0;

  for (const character of s.split('')) {
    if (!firstLetter) {
      firstLetter = character;
    }

    if (character === firstLetter) {
      countX++;
    } else {
      countY++;
    }

    if (countX === countY) {
      result++;
      countX = 0;
      countY = 0;
      firstLetter = null;
    }
  }

  if (countX > 0) {
    result++;
  }

  return result;
}

export { solution };
