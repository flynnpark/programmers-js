function solution(citations) {
  citations = citations.sort((a, b) => a - b);
  let result = citations.length;
  for (; result > 0; result--) {
    if (citations.filter((citation) => citation >= result).length >= result)
      break;
  }
  return result;
}

export { solution };
