import { solution } from './solution';

const cases = [
  {
    input: {
      maps: ['SOOOL', 'XXXXO', 'OOOOO', 'OXXXX', 'OOOOE'],
    },
    result: 16,
  },
  {
    input: {
      maps: ['LOOXS', 'OOOOX', 'OOOOO', 'OOOOO', 'EOOOO'],
    },
    result: -1,
  },
];

describe('미로 탈출', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
