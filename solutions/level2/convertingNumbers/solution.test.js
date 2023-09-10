import { solution } from './solution';

const cases = [
  {
    input: {
      x: 10,
      y: 40,
      n: 5,
    },
    result: 2,
  },
  {
    input: {
      x: 10,
      y: 40,
      n: 30,
    },
    result: 1,
  },
  {
    input: {
      x: 2,
      y: 5,
      n: 4,
    },
    result: -1,
  },
];

describe('숫자 변환하기', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
