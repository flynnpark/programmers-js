import { solution } from './solution';

const cases = [
  {
    input: {
      n: 6,
      cores: [1, 2, 3],
    },
    result: 2,
  },
];

describe('선입 선출 스케줄링', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
