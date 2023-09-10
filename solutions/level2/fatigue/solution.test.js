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

describe('피로도', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
