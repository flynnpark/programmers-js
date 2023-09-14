import { solution } from './solution';

const cases = [
  {
    input: {
      numbers: '1756',
    },
    result: 10,
  },
  {
    input: {
      numbers: '5123',
    },
    result: 8,
  },
];

describe('숫자 타자 대회', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
