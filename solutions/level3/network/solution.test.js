import { solution } from './solution';

const cases = [
  {
    input: {
      n: 3,
      computers: [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1],
      ],
    },
    result: 2,
  },
  {
    input: {
      n: 3,
      computers: [
        [1, 1, 0],
        [1, 1, 1],
        [0, 1, 1],
      ],
    },
    result: 1,
  },
  {
    input: {
      n: 3,
      computers: [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1],
      ],
    },
    result: 2,
  },
  {
    input: {
      n: 3,
      computers: [
        [1, 1, 0],
        [1, 1, 1],
        [0, 1, 1],
      ],
    },
    result: 1,
  },
  {
    input: {
      n: 3,
      computers: [
        [1, 0, 1],
        [0, 1, 0],
        [1, 0, 1],
      ],
    },
    result: 2,
  },
  {
    input: {
      n: 4,
      computers: [
        [1, 1, 0, 1],
        [1, 1, 0, 0],
        [0, 0, 1, 1],
        [1, 0, 1, 1],
      ],
    },
    result: 1,
  },
  {
    input: {
      n: 4,
      computers: [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
      ],
    },
    result: 4,
  },
];

describe('네트워크', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
