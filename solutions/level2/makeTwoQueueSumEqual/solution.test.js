import { solution } from './solution';

const cases = [
  {
    input: {
      queue1: [3, 2, 7, 2],
      queue2: [4, 6, 5, 1],
    },
    result: 2,
  },
  {
    input: {
      queue1: [1, 2, 1, 2],
      queue2: [1, 10, 1, 2],
    },
    result: 7,
  },
  {
    input: {
      queue1: [1, 1],
      queue2: [1, 5],
    },
    result: -1,
  },
];

describe('테이블 해시 함수', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
