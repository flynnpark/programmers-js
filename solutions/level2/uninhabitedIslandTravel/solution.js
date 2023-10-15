const X = 'X';

function solution(maps) {
  maps = maps.map((row) => row.split(''));

  const result = [];

  for (let x = 0; x < maps.length; x++) {
    for (let y = 0; y < maps[0].length; y++) {
      if (maps[x][y] === X) continue;
      result.push(bfs(maps, x, y));
    }
  }

  return result.length ? result.sort((a, b) => a - b) : [-1];
}

function bfs(maps, x, y) {
  let current = Number(maps[x][y]);
  maps[x][y] = X;

  const directX = [-1, 1, 0, 0];
  const directY = [0, 0, -1, 1];

  const queue = [[x, y]];
  while (queue.length) {
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
        current += Number(maps[nextX][nextY]);
        maps[nextX][nextY] = X;
        queue.push([nextX, nextY]);
      }
    }
  }
  return current;
}

export { solution };
