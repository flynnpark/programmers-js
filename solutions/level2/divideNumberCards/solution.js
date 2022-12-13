function gcd(a, b) {
  if (a % b === 0) {
    return b;
  }
  return gcd(b, a % b);
}

function solution(arrayA, arrayB) {
  const a = getDivisor(arrayA, arrayB);
  const b = getDivisor(arrayB, arrayA);

  return Math.max(a, b);
}

function getDivisor(arrayA, arrayB) {
  let answer = 0;

  arrayA.forEach((a) => (answer = gcd(answer, a)));

  if (arrayB.some((val) => val % answer === 0)) {
    return 0;
  }

  return answer;
}

export { solution };
