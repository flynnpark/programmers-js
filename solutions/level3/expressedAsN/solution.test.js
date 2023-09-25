import { solution } from './solution';

const cases = [
  {
    input: {
      N: 5,
      number: 12,
    },
    result: 4,
  },
  {
    input: {
      N: 2,
      number: 11,
    },
    result: 3,
  },
];

describe('N으로 표현', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
