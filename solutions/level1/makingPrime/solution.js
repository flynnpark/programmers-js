const MAX_NUMS_LENGTH = 3;

function isPrimeNumber(num) {
  for (let i = 2; i ** 2 <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(nums) {
  let result = 0;

  function dfs(prevSet, restNums) {
    if (prevSet.length === MAX_NUMS_LENGTH) {
      const sum = prevSet.reduce((a, b) => a + b, 0);
      if (isPrimeNumber(sum)) {
        result++;
      }
      return;
    }

    for (let i = 0; i < restNums.length; i++) {
      dfs([...prevSet, restNums[i]], [...restNums.slice(i + 1)]);
    }
  }

  dfs([], nums);

  return result;
}

export { solution };
