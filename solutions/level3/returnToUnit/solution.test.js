import { solution } from './solution';

const cases = [
  {
    input: {
      n: 3,
      roads: [
        [1, 2],
        [2, 3],
      ],
      sources: [2, 3],
      destination: 1,
    },
    result: [1, 2],
  },
  {
    input: {
      n: 5,
      roads: [
        [1, 2],
        [1, 4],
        [2, 4],
        [2, 5],
        [4, 5],
      ],
      sources: [1, 3, 5],
      destination: 5,
    },
    result: [2, -1, 0],
  },
];

describe('부대 복귀', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toStrictEqual(result);
  });
});
