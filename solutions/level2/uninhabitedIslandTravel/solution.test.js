import { solution } from './solution';

const cases = [
  {
    input: {
      maps: ['X591X', 'X1X5X', 'X231X', '1XXX1'],
    },
    result: [1, 1, 27],
  },
  {
    input: {
      maps: ['XXX', 'XXX', 'XXX'],
    },
    result: [-1],
  },
];

describe('무인도 여행', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toStrictEqual(result);
  });
});
