import { solution } from './solution';

const cases = [
  {
    input: {
      triangle: [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]],
    },
    result: 30,
  },
];

describe('정수 삼각형', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toStrictEqual(result);
  });
});
