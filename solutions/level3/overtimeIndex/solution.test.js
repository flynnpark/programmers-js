import { solution } from './solution';

const cases = [
  {
    input: {
      n: 4,
      works: [4, 3, 3],
    },
    result: 12,
  },
  {
    input: {
      n: 1,
      works: [2, 1, 2],
    },
    result: 6,
  },
  {
    input: {
      n: 3,
      works: [1, 1],
    },
    result: 0,
  },
  {
    input: {
      n: 99,
      works: [2, 15, 22, 55, 55],
    },
    result: 580,
  },
];

describe('야근 지수', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
