import { solution } from './solution';

const cases = [
  {
    input: {
      n: 6,
      times: [7, 10],
    },
    result: 28,
  },
];

describe('입국심사', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
