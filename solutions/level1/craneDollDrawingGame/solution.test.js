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

test('디펜스 게임', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input)) === result);
  });
});
