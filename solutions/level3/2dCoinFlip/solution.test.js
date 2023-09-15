import { solution } from './solution';

const cases = [
  {
    input: {
      beginning: [
        [0, 1, 0, 0, 0],
        [1, 0, 1, 0, 1],
        [0, 1, 1, 1, 0],
        [1, 0, 1, 1, 0],
        [0, 1, 0, 1, 0],
      ],
      target: [
        [0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1],
        [0, 0, 1, 0, 1],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1],
      ],
    },
    result: 5,
  },
  {
    input: {
      beginning: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      target: [
        [1, 0, 1],
        [0, 0, 0],
        [0, 0, 0],
      ],
    },
    result: -1,
  },
];

describe('2차원 동전 뒤집기', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
