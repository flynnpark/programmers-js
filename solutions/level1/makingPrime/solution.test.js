import { solution } from './solution';

const cases = [
  {
    input: {
      nums: [1, 2, 3, 4],
    },
    result: 1,
  },
  {
    input: {
      nums: [1, 2, 7, 6, 4],
    },
    result: 4,
  },
];

test('소수 만들기', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
