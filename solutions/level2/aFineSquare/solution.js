function gcd(num1, num2) {
  if (num2 === 0) return num1;
  return gcd(num2, num1 % num2);
}

function solution(w, h) {
  return w * h - (w + h - gcd(w, h));
}

export { solution };
