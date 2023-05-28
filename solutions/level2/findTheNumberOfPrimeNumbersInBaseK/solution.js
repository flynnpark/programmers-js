function isPrimeNumber(n) {
  if ([0, 1, NaN].includes(n)) return false;
  for (let i = 2; i ** 2 <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  const primeNumbers = n
    .toString(k)
    .split('0')
    .filter((item) => isPrimeNumber(parseInt(item, 10)));
  return primeNumbers.length;
}

export { solution };
