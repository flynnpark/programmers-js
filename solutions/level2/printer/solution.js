function solution(priorities, location) {
  let result = 0;

  while (priorities.length > 0) {
    const [current, ...rest] = priorities;
    if (current !== Math.max(...priorities)) {
      priorities = [...rest, current];
      if (location === 0) location = priorities.length - 1;
      else location--;
    } else {
      priorities = rest;
      result++;
      if (location === 0) break;
      else location--;
    }
  }

  return result;
}

export { solution };
