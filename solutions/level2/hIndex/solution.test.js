import { solution } from './solution';

const cases = [
  {
    input: {
      citations: [3, 0, 6, 1, 5],
    },
    result: 3,
  },
];

test('H-Index', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
