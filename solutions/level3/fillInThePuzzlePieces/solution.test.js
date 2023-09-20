import { solution } from './solution';

const cases = [
  {
    input: {
      game_board: [
        [1, 1, 0, 0, 1, 0],
        [0, 0, 1, 0, 1, 0],
        [0, 1, 1, 0, 0, 1],
        [1, 1, 0, 1, 1, 1],
        [1, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 0, 0],
      ],
      table: [
        [1, 0, 0, 1, 1, 0],
        [1, 0, 1, 0, 1, 0],
        [0, 1, 1, 0, 1, 1],
        [0, 0, 1, 0, 0, 0],
        [1, 1, 0, 1, 1, 0],
        [0, 1, 0, 0, 0, 0],
      ],
    },
    result: 14,
  },
  {
    input: {
      game_board: [
        [0, 0, 0],
        [1, 1, 0],
        [1, 1, 1],
      ],
      table: [
        [1, 1, 1],
        [1, 0, 0],
        [0, 0, 0],
      ],
    },
    result: 0,
  },
];

describe('퍼즐 조각 채우기', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
