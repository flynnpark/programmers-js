const [S, E, L, O, X] = ['S', 'E', 'L', 'O', 'X'];

function solution(maps) {
  const map1 = maps.map((row) => row.split(''));
  const map2 = maps.map((row) => row.split(''));

  let start = null;
  let lever = null;
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] === S) start = [i, j];
      else if (maps[i][j] === L) lever = [i, j];
      if (start && lever) break;
    }
  }

  const toLever = bfs(map1, start, L);
  const toEnd = bfs(map2, lever, E);

  if ([toLever, toEnd].includes(-1)) return -1;
  return toLever + toEnd;
}

function bfs(maps, start, end) {
  const directX = [-1, 1, 0, 0];
  const directY = [0, 0, -1, 1];
  let result = 0;
  const queue = [start];

  while (queue.length) {
    let currentSize = queue.length;
    while (currentSize-- > 0) {
      const [currentX, currentY] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nextX = currentX + directX[i];
        const nextY = currentY + directY[i];

        if (
          nextX >= 0 &&
          nextX < maps.length &&
          nextY >= 0 &&
          nextY < maps[0].length &&
          maps[nextX][nextY] !== X
        ) {
          if (maps[nextX][nextY] === end) return result + 1;
          queue.push([nextX, nextY]);
          maps[nextX][nextY] = X;
        }
      }
    }
    result++;
  }

  return -1;
}

export { solution };
