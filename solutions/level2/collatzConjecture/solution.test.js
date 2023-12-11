import { solution } from './solution';

const cases = [
  {
    input: {
      k: 5,
      ranges: [
        [0, 0],
        [0, -1],
        [2, -3],
        [3, -3],
      ],
    },
    result: [33.0, 31.5, 0.0, -1.0],
  },
  {
    input: {
      k: 3,
      ranges: [
        [0, 0],
        [1, -2],
        [3, -3],
      ],
    },
    result: [47.0, 36.0, 12.0],
  },
];

describe('우박수열 정적분', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toStrictEqual(result);
  });
});
