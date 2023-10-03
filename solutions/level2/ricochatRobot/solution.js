function solution(board) {
  board = board.map((row) => row.split(''));

  let result = 0;

  const width = board.length;
  const height = board[0].length;
  const directX = [-1, 1, 0, 0];
  const directY = [0, 0, -1, 1];
  const queue = [];

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (board[i][j] === 'R') {
        queue.push([i, j]);
        board[i][j] = 'C';
        break;
      }
    }
  }

  while (queue.length) {
    const currentQueueSize = queue.length;

    for (let i = 0; i < currentQueueSize; i++) {
      const [currentX, currentY] = queue.shift();

      for (let j = 0; j < 4; j++) {
        let nextX = currentX + directX[j];
        let nextY = currentY + directY[j];

        while (
          nextX >= 0 &&
          nextX < width &&
          nextY >= 0 &&
          nextY < height &&
          board[nextX][nextY] !== 'D'
        ) {
          nextX += directX[j];
          nextY += directY[j];
        }

        nextX -= directX[j];
        nextY -= directY[j];

        if (board[nextX][nextY] === 'G') return result + 1;

        if (board[nextX][nextY] !== 'C') {
          queue.push([nextX, nextY]);
          board[nextX][nextY] = 'C';
        }
      }
    }

    result++;
  }

  return -1;
}

export { solution };
