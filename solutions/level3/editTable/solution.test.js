import { solution } from './solution';

const cases = [
  {
    input: {
      n: 8,
      k: 2,
      cmd: ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z'],
    },
    result: 'OOOOXOOO',
  },
  {
    input: {
      n: 8,
      k: 2,
      cmd: ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z', 'U 1', 'C'],
    },
    result: 'OOXOXOOO',
  },
];

describe('표 편집', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
