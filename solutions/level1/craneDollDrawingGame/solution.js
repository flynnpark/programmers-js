function solution(board, moves) {
  let result = 0;
  const stack = [];

  moves.forEach((move) => {
    if (move <= board.length) {
      const tempLine = board.map((row) => row[move - 1]);
      for (let i = 0; i < tempLine.length; i++) {
        if (tempLine[i] !== 0) {
          if (stack.length > 0 && stack[stack.length - 1] === tempLine[i]) {
            stack.pop();
            result += 2;
          } else {
            stack.push(tempLine[i]);
          }
          board[i][move - 1] = 0;
          break;
        }
      }
    }
  });
  return result;
}

export { solution };
