import { solution } from './solution';

const cases = [
  {
    input: {
      a: [9, -1, -5],
    },
    result: 3,
  },
  {
    input: {
      a: [-16, 27, 65, -2, 58, -92, -71, -68, -61, -33],
    },
    result: 6,
  },
];

describe('풍턴 터뜨리기', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
