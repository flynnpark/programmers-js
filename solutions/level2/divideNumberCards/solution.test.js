import { solution } from './solution';

const cases = [
  {
    input: {
      arrayA: [10, 17],
      arrayB: [5, 20],
    },
    result: 0,
  },
  {
    input: {
      arrayA: [10, 20],
      arrayB: [5, 17],
    },
    result: 10,
  },
  {
    input: {
      arrayA: [14, 35, 119],
      arrayB: [18, 30, 102],
    },
    result: 7,
  },
];

describe('숫자 카드 나누기', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
