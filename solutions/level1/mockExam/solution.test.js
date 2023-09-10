import { solution } from './solution';

const cases = [
  {
    input: {
      answers: [1, 2, 3, 4, 5],
    },
    result: [1],
  },
  {
    input: {
      answers: [1, 3, 2, 4, 2],
    },
    result: [1, 2, 3],
  },
];

describe('모의고사', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toStrictEqual(result);
  });
});
