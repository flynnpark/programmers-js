function dfs(placeMap, x, y, visit, distance) {
  if (
    x >= 0 &&
    y >= 0 &&
    x <= 4 &&
    y <= 4 &&
    !['C', 'X'].includes(placeMap[y][x]) &&
    distance <= 2
  ) {
    visit.push(placeMap[y][x]);
    distance++;
    placeMap[y][x] = 'C';
    dfs(placeMap, x + 1, y, visit, distance);
    dfs(placeMap, x - 1, y, visit, distance);
    dfs(placeMap, x, y + 1, visit, distance);
    dfs(placeMap, x, y - 1, visit, distance);
  }

  return visit;
}

function solution(places) {
  let result = places.map((place) => {
    const placeMap = place.map((row) => row.split(''));

    for (let y = 0; y < 5; y++) {
      for (let x = 0; x < 5; x++) {
        if (placeMap[y][x] == 'P') {
          const visit = dfs(placeMap, x, y, [], 0);
          if (visit.filter((item) => item === 'P').length >= 2) {
            return 0;
          }
        }
      }
    }
    return 1;
  });

  return result;
}

export { solution };
