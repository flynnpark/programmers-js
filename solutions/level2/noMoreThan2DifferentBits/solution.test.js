import { solution } from './solution';

const cases = [
  {
    input: {
      numbers: [2, 7],
    },
    result: [3, 11],
  },
];

describe('2개 이하로 다른 비트', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toStrictEqual(result);
  });
});
