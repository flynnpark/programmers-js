import { solution } from './solution';

const cases = [
  {
    input: {
      n: 3,
      m: 4,
      x: 2,
      y: 3,
      r: 3,
      c: 1,
      k: 5,
    },
    result: 'dllrl',
  },
  {
    input: {
      n: 3,
      m: 3,
      x: 1,
      y: 2,
      r: 3,
      c: 3,
      k: 4,
    },
    result: 'impossible',
  },
];

describe('미로 탈출 명령어', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
