import { solution } from './solution';

const cases = [
  {
    input: {
      elements: [7, 9, 1, 1, 4],
    },
    result: 18,
  },
];

test('연속 부분 수열 합의 개수', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
