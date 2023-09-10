import { solution } from './solution';

const cases = [
  {
    input: {
      n: 7,
      k: 3,
      enemy: [4, 2, 4, 5, 3, 3, 1],
    },
    result: 5,
  },
  {
    input: {
      n: 2,
      k: 4,
      enemy: [3, 3, 3, 3],
    },
    result: 4,
  },
];

describe('디펜스 게임', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
