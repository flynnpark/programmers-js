import { solution } from './solution';

const cases = [
  {
    input: {
      w: 8,
      h: 12,
    },
    result: 80,
  },
];

test('멀쩡한 사각형', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
