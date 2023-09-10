import { solution } from './solution';

const cases = [
  {
    input: {
      numbers: [6, 10, 2],
    },
    result: '6210',
  },
  {
    input: {
      numbers: [3, 30, 34, 5, 9],
    },
    result: '9534330',
  },
];

describe('가장 큰 수', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
