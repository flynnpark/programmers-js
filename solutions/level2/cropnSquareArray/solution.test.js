import { solution } from './solution';

const cases = [
  {
    input: {
      n: 3,
      left: 2,
      right: 5,
    },
    result: [3, 2, 2, 3],
  },
  {
    input: {
      n: 4,
      left: 7,
      right: 14,
    },
    result: [4, 3, 3, 3, 4, 4, 4, 4],
  },
];

describe('n^2 배열 자르기', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toStrictEqual(result);
  });
});
