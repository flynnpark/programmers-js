function solution(k, score) {
  const result = [];
  const temp = [];

  for (const item of score) {
    temp.push(item);
    temp.sort((a, b) => b - a);
    if (temp.length > k) {
      temp.pop();
    }
    result.push(temp[temp.length - 1]);
  }

  return result;
}

export { solution };
