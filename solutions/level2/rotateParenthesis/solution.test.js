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

test('괄호 회전하기', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
