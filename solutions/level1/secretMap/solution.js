function decimal2binary(number, length) {
  return number.toString(2).padStart(length, '0');
}

function solution(n, arr1, arr2) {
  const result = [];
  for (let i = 0; i < n; i++) {
    const row = decimal2binary(arr1[i] | arr2[i], n);
    result.push(row.replaceAll('1', '#').replaceAll('0', ' '));
  }
  return result;
}

export { solution };
