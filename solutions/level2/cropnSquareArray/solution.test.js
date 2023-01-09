import { solution } from './solution';

const cases = [
  {
    input: {
      n: 3,
      left: 2,
      right: 5,
    },
    result: [3, 2, 2, 3],
  },
  {
    input: {
      n: 4,
      left: 7,
      right: 14,
    },
    result: [4, 3, 3, 3, 4, 4, 4, 4],
  },
];

test('n^2 배열 자르기', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
