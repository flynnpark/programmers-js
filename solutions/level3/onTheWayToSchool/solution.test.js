import { solution } from './solution';

const cases = [
  {
    input: {
      m: 4,
      n: 3,
      puddles: [[2, 2]],
    },
    result: 4,
  },
];

describe('등굣길', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
