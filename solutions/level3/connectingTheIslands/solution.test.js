import { solution } from './solution';

const cases = [
  {
    input: {
      n: 4,
      costs: [
        [0, 1, 1],
        [0, 2, 2],
        [1, 2, 5],
        [1, 3, 1],
        [2, 3, 8],
      ],
    },
    result: 4,
  },
];

describe('섬 연결하기', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
