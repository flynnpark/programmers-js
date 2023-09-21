function solution(game_board, table) {
  const emptyBlocks = [];
  const filledBlocks = [];

  for (let i = 0; i < game_board.length; i++) {
    for (let j = 0; j < game_board.length; j++) {
      if (game_board[i][j] === 0) {
        emptyBlocks.push(getBlockWithBfs([i, j], game_board, 1));
      }
    }
  }

  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table.length; j++) {
      if (table[i][j] === 1) {
        filledBlocks.push(getBlockWithBfs([i, j], table, 0));
      }
    }
  }

  let result = 0;

  filledBlocks.forEach((filledBlock) => {
    for (let i = 0; i < emptyBlocks.length; i++) {
      let match = false;
      for (let j = 0; j < 4; j++) {
        filledBlock = spinBlock(filledBlock);
        if (JSON.stringify(filledBlock) === JSON.stringify(emptyBlocks[i])) {
          emptyBlocks.splice(i, 1);
          result += filledBlock.length;
          match = true;
          break;
        }
      }
      if (match) break;
    }
  });

  return result;
}

function getBlockWithBfs([startX, startY], table, target) {
  table[startX][startY] = target;
  const queue = [[startX, startY]];
  const block = [];

  const x = [0, 0, 1, -1];
  const y = [1, -1, 0, 0];
  while (queue.length) {
    const [currentX, currentY] = queue.shift();
    block.push([currentX, currentY]);

    for (let i = 0; i < 4; i++) {
      const nextX = currentX + x[i];
      const nextY = currentY + y[i];

      if (
        nextX < 0 ||
        nextX >= table.length ||
        nextY < 0 ||
        nextY >= table.length
      ) {
        continue;
      } else if (table[nextX][nextY] === target) {
        continue;
      } else {
        queue.push([nextX, nextY]);
        table[nextX][nextY] = target;
      }
    }
  }
  return setBlockPositionAbsolutly(block);
}

function spinBlock(block) {
  const rotatedBlock = block.map((vertex) => [vertex[1], -vertex[0]]);
  return setBlockPositionAbsolutly(rotatedBlock);
}

function setBlockPositionAbsolutly(block) {
  const minX = Math.min(...block.map((vertex) => vertex[0]));
  const minY = Math.min(...block.map((vertex) => vertex[1]));
  return block.map(([x, y]) => [x - minX, y - minY]).sort();
}

export { solution };
