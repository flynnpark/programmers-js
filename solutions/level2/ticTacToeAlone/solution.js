function solution(board) {
  const [O, X] = ['O', 'X'];
  const oMatch = 'OOO';
  const xMatch = 'XXX';
  board = board.join('');

  const [oCount, xCount] = board.split('').reduce(
    ([oCount, xCount], current) => {
      switch (current) {
        case O:
          oCount++;
          break;
        case X:
          xCount++;
          break;
      }
      return [oCount, xCount];
    },
    [0, 0],
  );

  if (oCount < xCount || oCount - xCount > 1) return 0;

  let oScore = 0;
  let xScore = 0;
  // 수평
  for (let i = 0; i < 3; i++) {
    const row = board.slice(i * 3, i * 3 + 3);
    if (row === oMatch) oScore++;
    else if (row === xMatch) xScore++;
  }
  // 수직
  for (let i = 0; i < 3; i++) {
    const col = `${board[i]}${board[i + 3]}${board[i + 6]}`;
    if (col === oMatch) oScore++;
    else if (col === xMatch) xScore++;
  }
  // 대각선
  const diagonals = [
    `${board[0]}${board[4]}${board[8]}`,
    `${board[2]}${board[4]}${board[6]}`,
  ];
  diagonals.forEach((item) => {
    if (item === oMatch) oScore++;
    else if (item === xMatch) xScore++;
  });

  if (xScore && oScore) return 0;
  if (xScore && xCount !== oCount) return 0;
  if (oScore && xCount + 1 !== oCount) return 0;

  return 1;
}

export { solution };
