import { solution } from './solution';

const cases = [
  {
    input: {
      numbers: [2, 3, 3, 5],
    },
    result: [3, 5, 5, -1],
  },
  {
    input: {
      numbers: [9, 1, 5, 3, 6, 2],
    },
    result: [-1, 5, 6, 6, -1, -1],
  },
];

describe('뒤에 있는 큰 수 찾기', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toStrictEqual(result);
  });
});
