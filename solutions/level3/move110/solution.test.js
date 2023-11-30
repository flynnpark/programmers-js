import { solution } from './solution';

const cases = [
  {
    input: {
      s: ['1110', '100111100', '0111111010'],
    },
    result: ['1101', '100110110', '0110110111'],
  },
];

describe('110 옮기기', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toStrictEqual(result);
  });
});
