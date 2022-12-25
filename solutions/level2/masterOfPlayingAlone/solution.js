function solution(cards) {
  const resultList = [];

  for (let i = 1; i <= cards.length; i++) {
    let index = i - 1;
    let count = 0;

    while (true) {
      if (cards[index]) {
        const number = cards[index];
        cards[index] = 0;
        index = number - 1;
        count++;
        continue;
      }

      resultList.push(count);
      break;
    }
  }

  return resultList
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((a, b) => a * b, 1);
}

export { solution };
