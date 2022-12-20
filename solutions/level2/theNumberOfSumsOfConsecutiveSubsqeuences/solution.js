function solution(elements) {
  const countSet = new Set();

  for (let i = 1; i <= elements.length; i++) {
    const temp = [...elements, ...elements.slice(0, i)];

    for (let j = 0; j < temp.length; j++) {
      countSet.add(temp.slice(j, j + i).reduce((a, b) => a + b, 0));
    }
  }

  return countSet.size;
}

export { solution };
