import { solution } from './solution';

const cases = [
  {
    input: {
      k: 2,
      d: 4,
    },
    result: 6,
  },
  {
    input: {
      k: 1,
      d: 5,
    },
    result: 26,
  },
];

describe('점 찍기', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
