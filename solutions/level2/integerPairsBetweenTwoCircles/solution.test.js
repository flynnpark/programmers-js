import { solution } from './solution';

const cases = [
  {
    input: {
      r1: 2,
      r2: 3,
    },
    result: 20,
  },
  {
    input: {
      r1: 25,
      r2: 39,
    },
    result: 2836,
  },
];

describe('두 원 사이의 정수 쌍', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
