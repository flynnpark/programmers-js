import { solution } from './solution';

const cases = [
  {
    input: {
      progresses: [93, 30, 55],
      speeds: [1, 30, 5],
    },
    result: [2, 1],
  },
  {
    input: {
      progresses: [95, 90, 99, 99, 80, 99],
      speeds: [1, 1, 1, 1, 1, 1],
    },
    result: [1, 3, 2],
  },
];

describe('기능개발', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toStrictEqual(result);
  });
});
