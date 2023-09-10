import { solution } from './solution';

const cases = [
  {
    input: {
      nums: [1, 2, 3, 4],
    },
    result: 1,
  },
  {
    input: {
      nums: [1, 2, 7, 6, 4],
    },
    result: 4,
  },
];

describe('소수 만들기', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
