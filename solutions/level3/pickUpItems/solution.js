function solution(rectangle, characterX, characterY, itemX, itemY) {
  const worldMap = Array.from({ length: 103 }, () => Array(103).fill(0));
  const doubleRectangle = rectangle.map((miniRectangle) =>
    miniRectangle.map((coord) => coord * 2),
  );

  doubleRectangle.forEach(([x1, y1, x2, y2]) => {
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        if (i === x1 || i === x2 || j === y1 || j === y2) {
          if (worldMap[i][j] === 0) {
            worldMap[i][j] = 1;
          } else {
            continue;
          }
        } else {
          worldMap[i][j] = 2;
        }
      }
    }
  });

  characterX *= 2;
  characterY *= 2;
  itemX *= 2;
  itemY *= 2;

  const directionX = [1, -1, 0, 0];
  const directionY = [0, 0, 1, -1];

  const queue = [[characterX, characterY, 0]];
  worldMap[characterX][characterY] += 100;

  while (queue.length) {
    const [currentX, currentY, currentCount] = queue.shift();

    if (currentX === itemX && currentY === itemY) {
      return currentCount / 2;
    }

    for (let i = 0; i < 4; i++) {
      const [nextX, nextY] = [
        currentX + directionX[i],
        currentY + directionY[i],
      ];

      if (nextX >= 0 && nextX < 101 && nextY >= 0 && nextY < 101) {
        if (worldMap[nextX][nextY] === 1) {
          worldMap[nextX][nextY] = 100;
          queue.push([nextX, nextY, currentCount + 1]);
        }
      }
    }
  }
  return 0;
}

export { solution };
