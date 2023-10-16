import { solution } from './solution';

const cases = [
  {
    input: {
      word: 'AAAAE',
    },
    result: 6,
  },
  {
    input: {
      word: 'AAAE',
    },
    result: 10,
  },
  {
    input: {
      word: 'I',
    },
    result: 1563,
  },
  {
    input: {
      word: 'EIO',
    },
    result: 1189,
  },
];

describe('모음 사전', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
