import { solution } from './solution';

const cases = [
  {
    input: {
      n: 437674,
      k: 3,
    },
    result: 3,
  },
  {
    input: {
      n: 110011,
      k: 10,
    },
    result: 2,
  },
];

describe('k진수에서 소수 개수 구하기', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
