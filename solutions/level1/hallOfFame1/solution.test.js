import { solution } from './solution';

const cases = [
  {
    input: {
      k: 3,
      score: [10, 100, 20, 150, 1, 100, 200],
    },
    result: [10, 10, 10, 20, 20, 100, 100],
  },
  {
    input: {
      k: 4,
      score: [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000],
    },
    result: [0, 0, 0, 0, 20, 40, 70, 70, 150, 300],
  },
];

test('명예의 전당 (1)', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input)) === result);
  });
});
