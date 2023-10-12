import { solution } from './solution';

const cases = [
  {
    input: {
      weights: [100, 180, 360, 100, 270],
    },
    result: 4,
  },
  {
    input: {
      weights: [100, 100, 100, 150, 150, 200, 300],
    },
    result: 18,
  },
];

describe('시소 짝꿍', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
