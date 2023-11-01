import { solution } from './solution';

const cases = [
  {
    input: {
      n: 2,
      s: 9,
    },
    result: [4, 5],
  },
  {
    input: {
      n: 2,
      s: 1,
    },
    result: [-1],
  },
  {
    input: {
      n: 2,
      s: 8,
    },
    result: [4, 4],
  },
];

describe('최고의 집합', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toStrictEqual(result);
  });
});
