function solution(beginning, target) {
  let compared = beginning.map((row, i) =>
    row.map((col, j) => col ^ target[i][j]),
  );

  const rowFirst0 = checkRowFirst(compared, 0);
  const rowFirst1 = checkRowFirst(compared, 1);
  const colFirst0 = checkColFirst(compared, 0);
  const colFirst1 = checkColFirst(compared, 1);

  if ([rowFirst0, rowFirst1, colFirst0, colFirst1].every((v) => v === -1)) {
    return -1;
  }

  const filtered = [rowFirst0, rowFirst1, colFirst0, colFirst1].filter(
    (v) => v !== -1,
  );
  return Math.min(...filtered);
}

function flipRow(matrix, row) {
  return matrix.map((col, i) => (i === row ? col.map((v) => v ^ 1) : col));
}

function flipColumn(matrix, col) {
  return matrix.map((row, i) => row.map((v, j) => (j === col ? v ^ 1 : v)));
}

function checkRowFirst(matrix, target) {
  let count = 0;
  const rowLength = matrix.length;
  const colLength = matrix[0].length;

  for (let i = 0; i < rowLength; i++) {
    if (matrix[i][0] === target) {
      matrix = flipRow(matrix, i);
      count++;
    }
  }

  for (let j = 0; j < colLength; j++) {
    if (matrix[0][j] === 1) {
      matrix = flipColumn(matrix, j);
      count++;
    }
  }

  if (matrix.some((row) => row.some((v) => v === 1))) {
    return -1;
  }

  return count;
}

function checkColFirst(matrix, target) {
  let count = 0;
  const rowLength = matrix.length;
  const colLength = matrix[0].length;

  for (let j = 0; j < colLength; j++) {
    if (matrix[0][j] === target) {
      matrix = flipColumn(matrix, j);
      count++;
    }
  }

  for (let i = 0; i < rowLength; i++) {
    if (matrix[i][0] === 1) {
      matrix = flipRow(matrix, i);
      count++;
    }
  }

  if (matrix.some((row) => row.some((v) => v === 1))) {
    return -1;
  }

  return count;
}

export { solution };
