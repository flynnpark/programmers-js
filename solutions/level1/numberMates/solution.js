function solution(X, Y) {
  const mapX = {};
  const mapY = {};

  const largestLength = Math.max(X.length, Y.length);
  for (let i = 0; i < largestLength; i++) {
    if (X[i] !== undefined) {
      if (mapX[X[i]] === undefined) {
        mapX[X[i]] = 1;
      } else {
        mapX[X[i]] += 1;
      }
    }
    if (Y[i] !== undefined) {
      if (mapY[Y[i]] === undefined) {
        mapY[Y[i]] = 1;
      } else {
        mapY[Y[i]] += 1;
      }
    }
  }

  let result = [];
  for (let i = 9; i >= 0; i--) {
    if (mapX[i] > 0 && mapY[i] > 0) {
      const length = Math.min(mapX[i], mapY[i]);
      if (result.length === 0 && i === 0) {
        result.push("0");
      } else {
        result.push(`${i}`.repeat(length));
      }
    }
  }

  if (result.length === 0) {
    return "-1";
  }
  return result.join("");
}

export { solution };
