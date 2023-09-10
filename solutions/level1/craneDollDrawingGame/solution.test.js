import { solution } from './solution';

const cases = [
  {
    input: {
      board: [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 3],
        [0, 2, 5, 0, 1],
        [4, 2, 4, 4, 2],
        [3, 5, 1, 3, 1],
      ],
      moves: [1, 5, 3, 5, 1, 2, 1, 4],
    },
    result: 4,
  },
];

describe('크레인 인형 뽑기 게임', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
