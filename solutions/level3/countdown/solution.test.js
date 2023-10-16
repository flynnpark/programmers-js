import { solution } from './solution';

const cases = [
  {
    input: {
      target: 21,
    },
    result: [1, 0],
  },
  {
    input: {
      target: 58,
    },
    result: [2, 2],
  },
];

describe('카운트 다운', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toStrictEqual(result);
  });
});
