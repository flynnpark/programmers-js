function solution(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    const row = [];
    for (let j = 0; j < arr1[i].length; j++) {
      const sum = arr1[i][j] + arr2[i][j];
      row.push(sum);
    }
    result.push(row);
  }
  return result;
}

export { solution };
