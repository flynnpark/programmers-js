function isPrimeNumber(num) {
  if ([0, 1].includes(num)) {
    return false;
  }

  for (let i = 2; i ** 2 <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(numbers) {
  function dfs(prevNums, restNums) {
    if (!restNums.length) {
      return;
    }

    for (let i = 0; i < restNums.length; i++) {
      const newPrevNums = [...prevNums];
      newPrevNums.push(restNums[i]);
      candidates.add(Number(newPrevNums.join('')));
      dfs(newPrevNums, [...restNums.slice(0, i), ...restNums.slice(i + 1)]);
    }
  }

  let result = 0;
  const candidates = new Set();
  dfs([], numbers.split(''));

  for (let item of candidates) {
    if (isPrimeNumber(item)) result++;
  }

  return result;
}

export { solution };
