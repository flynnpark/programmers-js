import { solution } from './solution';

const cases = [
  {
    input: {
      board: ['...D..R', '.D.G...', '....D.D', 'D....D.', '..D....'],
    },
    result: 7,
  },
  {
    input: {
      board: ['.D.R', '....', '.G..', '...D'],
    },
    result: -1,
  },
];

describe('리코챗 로봇', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
