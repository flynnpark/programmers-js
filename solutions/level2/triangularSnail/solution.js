const moveCommand = [
  { y: 1, x: 0 },
  { y: 0, x: 1 },
  { y: -1, x: -1 },
];

function solution(n) {
  const triangle = new Array(n)
    .fill(0)
    .map((_, index) => new Array(index + 1).fill(0));

  let x = 0;
  let y = 0;
  let count = 1;
  let moveType = 0;
  let xDiff = moveCommand[moveType].x;
  let yDiff = moveCommand[moveType].y;

  while (triangle[y] !== undefined && triangle[y][x] === 0) {
    triangle[y][x] = count++;

    if (
      y >= n ||
      x >= n ||
      triangle[y + yDiff] === undefined ||
      triangle[y + yDiff][x + xDiff] !== 0
    ) {
      moveType = (moveType + 1) % moveCommand.length;
    }

    xDiff = moveCommand[moveType].x;
    yDiff = moveCommand[moveType].y;
    x += xDiff;
    y += yDiff;
  }

  return triangle.flat();
}

export { solution };
