import { solution } from './solution';

const cases = [
  {
    input: {
      targets: [
        [4, 5],
        [4, 8],
        [10, 14],
        [11, 13],
        [5, 12],
        [3, 7],
        [1, 4],
      ],
    },
    result: 3,
  },
];

describe('요격 시스템', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
