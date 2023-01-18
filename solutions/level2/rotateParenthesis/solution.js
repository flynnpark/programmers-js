const PARENTHESIS = {
  ')': '(',
  '}': '{',
  ']': '[',
};

function isValidParenthesis(sArray) {
  const stack = [];
  for (let i = 0; i < sArray.length; i++) {
    if (!Object.keys(PARENTHESIS).includes(sArray[i])) {
      stack.push(sArray[i]);
    } else if (stack.length === 0 || PARENTHESIS[sArray[i]] !== stack.pop()) {
      return false;
    }
  }
  return stack.length > 0 ? false : true;
}

function solution(s) {
  let result = 0;
  let count = 0;
  while (count++ < s.length) {
    let [first, ...rest] = s.slice('');
    const temp = [...rest, first];
    if (isValidParenthesis(temp)) {
      result++;
    }
    s = temp.join('');
  }
  return result;
}

export { solution };
