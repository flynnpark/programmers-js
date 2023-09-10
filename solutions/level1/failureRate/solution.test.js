import { solution } from './solution';

const cases = [
  {
    input: {
      N: 5,
      stages: [2, 1, 2, 6, 2, 4, 3, 3],
    },
    result: [3, 4, 2, 1, 5],
  },
  {
    input: {
      N: 4,
      stages: [4, 4, 4, 4, 4],
    },
    result: [4, 1, 2, 3],
  },
];

describe('실패율', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toStrictEqual(result);
  });
});
