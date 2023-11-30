function solution(s) {
  return s.map(updateText);
}

function updateText(text) {
  const MATCH_TEXT = '110';
  const stack = [];
  let matchCount = 0;

  for (const right of text) {
    if (stack.length > 1 && right === '0') {
      const middle = stack.pop();
      const left = stack.pop();
      `${left}${middle}${right}` === MATCH_TEXT
        ? matchCount++
        : stack.push(left, middle, right);
    } else {
      stack.push(right);
    }
  }

  const baseText = stack.join('');
  const bestPosition = baseText.lastIndexOf('0') + 1;
  return bestPosition === -1
    ? `${MATCH_TEXT.repeat(matchCount)}${baseText}`
    : `${baseText.slice(0, bestPosition)}${MATCH_TEXT.repeat(
        matchCount,
      )}${baseText.slice(bestPosition)}`;
}

export { solution };
