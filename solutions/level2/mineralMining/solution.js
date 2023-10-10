function solution(picks, minerals) {
  const partLength = 5;
  const totalPicks = picks.reduce((a, b) => a + b, 0);

  minerals.splice(totalPicks * partLength);

  const valueMap = {
    diamond: 25,
    iron: 5,
    stone: 1,
  };

  const candidates = [];
  for (let i = 0; i < minerals.length; i += partLength) {
    const part = minerals.slice(i, i + partLength);
    const value = part.reduce((acc, mineral) => acc + valueMap[mineral], 0);
    candidates.push([part, value]);
  }

  candidates.sort((a, b) => b[1] - a[1]);

  let result = 0;
  candidates.forEach(([part]) => {
    const currentToolIndex = picks.findIndex((pick) => pick !== 0);
    if (currentToolIndex !== -1) {
      picks[currentToolIndex]--;
    }

    for (const mineral of part) {
      const mineralIndex = Object.keys(valueMap).indexOf(mineral);
      const gap = currentToolIndex - mineralIndex;
      result += gap <= 0 ? 1 : 5 ** gap;
    }
  });

  return result;
}

export { solution };
