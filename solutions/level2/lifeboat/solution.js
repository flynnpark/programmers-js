function solution(people, limit) {
  let result = 0;

  people.sort((a, b) => b - a);

  let first = 0;
  let second = people.length - 1;
  while (first <= second) {
    if (people[first] + people[second] <= limit) {
      first++;
      second--;
    } else {
      first++;
    }
    result++;
  }

  return result;
}

export { solution };
