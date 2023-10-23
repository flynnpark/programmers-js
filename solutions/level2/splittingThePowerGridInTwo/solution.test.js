import { solution } from './solution';

const cases = [
  {
    input: {
      n: 9,
      wires: [
        [1, 3],
        [2, 3],
        [3, 4],
        [4, 5],
        [4, 6],
        [4, 7],
        [7, 8],
        [7, 9],
      ],
    },
    result: 3,
  },
  {
    input: {
      n: 4,
      wires: [
        [1, 2],
        [2, 3],
        [3, 4],
      ],
    },
    result: 0,
  },
  {
    input: {
      n: 7,
      wires: [
        [1, 2],
        [2, 7],
        [3, 7],
        [3, 4],
        [4, 5],
        [6, 7],
      ],
    },
    result: 1,
  },
];

describe('전력망을 둘로 나누기', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
