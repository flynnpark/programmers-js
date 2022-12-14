function solution(s) {
  const result = [];
  const charMap = {};

  s.split('').forEach((char, index) => {
    if (typeof charMap[char] !== 'number') {
      result.push(-1);
    } else {
      result.push(index - charMap[char]);
    }
    charMap[char] = index;
  });

  return result;
}

export { solution };
