import { solution } from './solution';

const cases = [
  {
    input: {
      n: 6,
      paths: [
        [1, 2, 3],
        [2, 3, 5],
        [2, 4, 2],
        [2, 5, 4],
        [3, 4, 4],
        [4, 5, 3],
        [4, 6, 1],
        [5, 6, 1],
      ],
      gates: [1, 3],
      summits: [5],
    },
    result: [5, 3],
  },
  {
    input: {
      n: 7,
      paths: [
        [1, 4, 4],
        [1, 6, 1],
        [1, 7, 3],
        [2, 5, 2],
        [3, 7, 4],
        [5, 6, 6],
      ],
      gates: [1],
      summits: [2, 3, 4],
    },
    result: [3, 4],
  },
  {
    input: {
      n: 7,
      paths: [
        [1, 2, 5],
        [1, 4, 1],
        [2, 3, 1],
        [2, 6, 7],
        [4, 5, 1],
        [5, 6, 1],
        [6, 7, 1],
      ],
      gates: [3, 7],
      summits: [1, 5],
    },
    result: [5, 1],
  },
  {
    input: {
      n: 5,
      paths: [
        [1, 3, 10],
        [1, 4, 20],
        [2, 3, 4],
        [2, 4, 6],
        [3, 5, 20],
        [4, 5, 6],
      ],
      gates: [1, 2],
      summits: [5],
    },
    result: [5, 6],
  },
];

describe('등산코스 정하기', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
