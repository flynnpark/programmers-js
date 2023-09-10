import { solution } from './solution';

const cases = [
  {
    input: {
      k: 3,
      m: 4,
      score: [1, 2, 3, 1, 2, 3, 1],
    },
    result: 8,
  },
  {
    input: {
      k: 4,
      m: 3,
      score: [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2],
    },
    result: 33,
  },
];

describe('과일 장수', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
