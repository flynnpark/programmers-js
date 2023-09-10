import { solution } from './solution';

const cases = [
  {
    input: {
      cards: [8, 6, 3, 7, 2, 5, 1, 4],
    },
    result: 12,
  },
];

describe('혼자 놀기의 달인', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
