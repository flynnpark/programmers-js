function solution(numbers) {
  const weight = getWeight();

  const dp = Array.from({ length: numbers.length + 1 }, () =>
    Array.from({ length: 10 }, () => new Array(10).fill(Infinity)),
  );

  dp[0][4][6] = 0;

  for (let index = 0; index < numbers.length; index++) {
    const number = Number(numbers[index]);

    const prevDp = dp[index];
    const currentDp = dp[index + 1];

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const prevValue = prevDp[i][j];
        if (i === j || prevValue === Infinity) continue;

        if (currentDp[number][j] > prevValue + weight[i][number]) {
          currentDp[number][j] = prevValue + weight[i][number];
        }

        if (currentDp[i][number] > prevValue + weight[j][number]) {
          currentDp[i][number] = prevValue + weight[j][number];
        }
      }
    }
  }

  return Math.min(...dp[numbers.length].flat().flat());
}

function getWeight() {
  // a -> b로 이동할 때의 가중치를 반환한다.
  const weight = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => 0),
  );

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const [iRow, iCol] = getPosition(i);
      const [jRow, jCol] = getPosition(j);

      const x = Math.abs(iRow - jRow);
      const y = Math.abs(iCol - jCol);
      const minDistance = Math.min(x, y);
      const maxDistance = Math.max(x, y);
      weight[i][j] =
        i === j ? 1 : minDistance * 3 + Math.abs(maxDistance - minDistance) * 2;
    }
  }

  return weight;
}

function getPosition(number) {
  // 숫자의 위치를 반환한다.
  const numberPad = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['*', '0', '#'],
  ];
  const strNumber = String(number);

  const position = [0, 0];
  numberPad.find((row, rowIndex) => {
    const colIndex = row.findIndex((col) => col === strNumber);
    if (colIndex !== -1) {
      position[0] = rowIndex;
      position[1] = colIndex;
      return true;
    }
  });
  return position;
}

export { solution };
