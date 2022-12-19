import { solution } from './solution';

const cases = [
  {
    input: {
      d: [1, 3, 2, 5, 4],
      budget: 9,
    },
    result: 3,
  },
  {
    input: {
      d: [2, 2, 3, 3],
      budget: 10,
    },
    result: 4,
  },
];

test('예산', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input)) === result);
  });
});
