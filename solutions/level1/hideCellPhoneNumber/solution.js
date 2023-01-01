function solution(phone_number) {
  return phone_number
    .split('')
    .map((item, index) => (index < phone_number.length - 4 ? '*' : item))
    .join('');
}

export { solution };
