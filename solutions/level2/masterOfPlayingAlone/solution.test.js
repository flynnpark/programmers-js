import { solution } from './solution';

const cases = [
  {
    input: {
      cards: [8, 6, 3, 7, 2, 5, 1, 4],
    },
    result: 12,
  },
];

test('혼자 놀기의 달인', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input)) === result);
  });
});
