function solution(orders, course) {
  orders = orders.map((order) => order.split('').sort());
  const combinationsArr = orders.map((order) =>
    getCombinations([], [], order).map((item) => item.join(''))
  );

  const counter = {};
  combinationsArr.forEach((combinations) => {
    for (let combination of combinations) {
      if (!counter[combination]) counter[combination] = 1;
      else counter[combination]++;
    }
  });
  const counterArr = Object.keys(counter).map((key) => [key, counter[key]]);

  const result = [];
  course.forEach((num) => {
    const candidates = counterArr
      .filter((item) => item[0].length == num && item[1] >= 2)
      .sort((a, b) => b[1] - a[1]);
    if (candidates.length === 0) return;
    const ref = candidates[0][1];
    for (let candidate of candidates) {
      if (candidate[1] == ref) result.push(candidate[0]);
    }
  });
  return result.sort();
}

function getCombinations(result, path, rest) {
  for (let i = 0; i < rest.length; i++) {
    const currentPath = [...path, rest[i]];
    result.push(currentPath);
    getCombinations(result, currentPath, rest.slice(i + 1));
  }
  return result;
}

export { solution };
