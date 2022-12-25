function solution(answers) {
  const correctCounts = [0, 0, 0];
  const no1Numbers = [1, 2, 3, 4, 5];
  const no2Numbers = [2, 1, 2, 3, 2, 4, 2, 5];
  const no3Numbers = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === no1Numbers[i % no1Numbers.length]) {
      correctCounts[0]++;
    }
    if (answers[i] === no2Numbers[i % no2Numbers.length]) {
      correctCounts[1]++;
    }
    if (answers[i] === no3Numbers[i % no3Numbers.length]) {
      correctCounts[2]++;
    }
  }

  const maxCounts = Math.max(...correctCounts);
  const results = [];

  correctCounts.forEach((value, index) => {
    if (value === maxCounts) {
      results.push(index + 1);
    }
  });
  return results;
}

export { solution };
