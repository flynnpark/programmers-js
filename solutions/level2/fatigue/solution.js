function solution(k, dungeons) {
  let result = 0;

  function dfs(prevK, prevDungeons, prevResult) {
    for (let i = 0; i < prevDungeons.length; i++) {
      const [need, consume] = prevDungeons[i];
      if (!need || need > prevK) {
        continue;
      }
      const nextDungeons = [...prevDungeons].map((item) => [...item]);
      nextDungeons[i] = [null, null];
      dfs(prevK - consume, nextDungeons, prevResult + 1);
    }
    result = Math.max(prevResult, result);
  }

  dfs(k, dungeons, result);
  return result;
}

export { solution };
