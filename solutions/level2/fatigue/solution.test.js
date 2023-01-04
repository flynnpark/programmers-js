import { solution } from './solution';

const cases = [
  {
    input: {
      k: 80,
      dungeons: [
        [80, 20],
        [50, 40],
        [30, 10],
      ],
    },
    result: 3,
  },
];

test('피로도', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
