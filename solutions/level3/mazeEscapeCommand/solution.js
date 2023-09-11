function solution(n, m, x, y, r, c, k) {
  let minimumDistance = getMinimumDistance(x, y, r, c);

  if (minimumDistance > k || minimumDistance % 2 !== k % 2) {
    return 'impossible';
  }

  const command = ['d', 'l', 'r', 'u'];
  let result = '';

  while (minimumDistance < k) {
    // x, y 현재 위치
    // r, c 목표 위치
    const commandIndex = getNextCommandIndex(n, m, x, y);

    result += command[commandIndex];
    switch (commandIndex) {
      case 0:
        x++;
        break;
      case 1:
        y--;
        break;
      case 2:
        y++;
        break;
      case 3:
        x--;
        break;
    }

    minimumDistance = getMinimumDistance(x, y, r, c);
    k--;
  }

  if (x < r) result += 'd'.repeat(r - x);
  if (y > c) result += 'l'.repeat(y - c);
  if (y < c) result += 'r'.repeat(c - y);
  if (x > r) result += 'u'.repeat(x - r);

  return result;
}

const getMinimumDistance = (x, y, r, c) => {
  return Math.abs(x - r) + Math.abs(y - c);
};

const getNextCommandIndex = (n, m, x, y) => {
  const commandX = [1, 0, 0, -1];
  const commandY = [0, -1, 1, 0];

  for (let i = 0; i < 4; i++) {
    const nextX = commandX[i] + x;
    const nextY = commandY[i] + y;

    if (nextX >= 1 && nextX <= n && nextY >= 1 && nextY <= m) {
      return i;
    }
  }
};

export { solution };
