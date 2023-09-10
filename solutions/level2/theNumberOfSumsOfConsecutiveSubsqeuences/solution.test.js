import { solution } from './solution';

const cases = [
  {
    input: {
      elements: [7, 9, 1, 1, 4],
    },
    result: 18,
  },
];

describe('연속 부분 수열 합의 개수', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
