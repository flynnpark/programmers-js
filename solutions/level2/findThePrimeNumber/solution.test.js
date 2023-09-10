import { solution } from './solution';

const cases = [
  {
    input: {
      numbers: '17',
    },
    result: 3,
  },
  {
    input: {
      numbers: '011',
    },
    result: 2,
  },
];

describe('소수 찾기', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
