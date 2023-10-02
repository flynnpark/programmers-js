import { solution } from './solution';

const cases = [
  {
    input: {
      sequence: [1, 2, 3, 4, 5],
      k: 7,
    },
    result: [2, 3],
  },
  {
    input: {
      sequence: [1, 1, 1, 2, 3, 4, 5],
      k: 5,
    },
    result: [6, 6],
  },
  {
    input: {
      sequence: [2, 2, 2, 2, 2],
      k: 6,
    },
    result: [0, 2],
  },
];

describe('연속된 부분 수열의 합', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toStrictEqual(result);
  });
});
