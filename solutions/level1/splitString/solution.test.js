import { solution } from './solution';

const cases = [
  {
    input: { s: 'banana' },
    result: 3,
  },
  {
    input: { s: 'abracadabra' },
    result: 6,
  },
  {
    input: { s: 'aaabbaccccabba' },
    result: 3,
  },
];

describe('문자열 나누기', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
