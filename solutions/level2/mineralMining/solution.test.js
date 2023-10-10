import { solution } from './solution';

const cases = [
  {
    input: {
      picks: [1, 3, 2],
      minerals: [
        'diamond',
        'diamond',
        'diamond',
        'iron',
        'iron',
        'diamond',
        'iron',
        'stone',
      ],
    },
    result: 12,
  },
  {
    input: {
      picks: [0, 1, 1],
      minerals: [
        'diamond',
        'diamond',
        'diamond',
        'diamond',
        'diamond',
        'iron',
        'iron',
        'iron',
        'iron',
        'iron',
        'diamond',
      ],
    },
    result: 50,
  },
  {
    input: {
      picks: [1, 0, 1],
      minerals: [
        'iron',
        'iron',
        'iron',
        'iron',
        'diamond',
        'diamond',
        'diamond',
      ],
    },
    result: 47,
  },
  {
    input: {
      picks: [0, 0, 0],
      minerals: [
        'diamond',
        'diamond',
        'diamond',
        'diamond',
        'diamond',
        'iron',
        'iron',
        'iron',
        'iron',
        'iron',
        'diamond',
      ],
    },
    result: 0,
  },
  {
    input: {
      picks: [1, 0, 0],
      minerals: [
        'diamond',
        'diamond',
        'diamond',
        'diamond',
        'diamond',
        'iron',
        'iron',
        'iron',
        'iron',
        'iron',
        'diamond',
      ],
    },
    result: 5,
  },
  {
    input: {
      picks: [0, 0, 1],
      minerals: [
        'diamond',
        'diamond',
        'diamond',
        'diamond',
        'diamond',
        'iron',
        'iron',
        'iron',
        'iron',
        'iron',
        'diamond',
      ],
    },
    result: 125,
  },
  {
    input: {
      picks: [1, 0, 1],
      minerals: [
        'stone',
        'stone',
        'stone',
        'stone',
        'stone',
        'iron',
        'iron',
        'iron',
        'iron',
        'iron',
        'diamond',
        'diamond',
      ],
    },
    result: 10,
  },
];

describe('광물 캐기', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
