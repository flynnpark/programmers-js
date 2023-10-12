function solution(weights) {
  weights.sort((a, b) => a - b);

  const weightsMap = {};
  weights.forEach((weight) => {
    weightsMap[weight] = (weightsMap[weight] || 0) + 1;
  });

  return weights.reduce((acc, weight) => {
    weightsMap[weight]--;
    if (weightsMap[weight]) acc += weightsMap[weight];
    if (weightsMap[weight * 2]) acc += weightsMap[weight * 2];
    if (weightsMap[(weight / 2) * 3]) acc += weightsMap[(weight / 2) * 3];
    if (weightsMap[(weight / 3) * 4]) acc += weightsMap[(weight / 3) * 4];
    return acc;
  }, 0);
}

export { solution };
