import { solution } from './solution';

const cases = [
  {
    input: {
      n: 6,
      vertex: [
        [3, 6],
        [4, 3],
        [3, 2],
        [1, 3],
        [1, 2],
        [2, 4],
        [5, 2],
      ],
    },
    result: 3,
  },
];

describe('가장 먼 노드', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
