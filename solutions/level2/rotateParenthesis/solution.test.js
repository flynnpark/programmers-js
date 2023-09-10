import { solution } from './solution';

const cases = [
  {
    input: {
      s: '[](){}',
    },
    result: 3,
  },
  {
    input: {
      s: '}]()[{',
    },
    result: 2,
  },
  {
    input: {
      s: '[)(]',
    },
    result: 0,
  },
  {
    input: {
      s: '}}}',
    },
    result: 0,
  },
  {
    input: {
      s: '{{{{{{',
    },
    result: 0,
  },
];

describe('괄호 회전하기', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
