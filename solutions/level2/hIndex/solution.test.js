import { solution } from './solution';

const cases = [
  {
    input: {
      citations: [3, 0, 6, 1, 5],
    },
    result: 3,
  },
];

describe('H-Index', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
