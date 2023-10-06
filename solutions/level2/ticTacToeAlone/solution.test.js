import { solution } from './solution';

const cases = [
  {
    input: {
      board: ['O.X', '.O.', '..X'],
    },
    result: 1,
  },
  {
    input: {
      board: ['OOO', '...', 'XXX'],
    },
    result: 0,
  },
  {
    input: {
      board: ['...', '.X.', '...'],
    },
    result: 0,
  },
  {
    input: {
      board: ['...', '...', '...'],
    },
    result: 1,
  },
  {
    input: {
      board: ['OOX', 'OOX', 'XXO'],
    },
    result: 1,
  },
  {
    input: {
      board: ['XOX', 'OXO', 'XOO'],
    },
    result: 0,
  },
  {
    input: {
      board: ['O.X', 'O..', 'O..'],
    },
    result: 0,
  },
  {
    input: {
      board: ['OOO', '...', 'XXX'],
    },
    result: 0,
  },
  {
    input: {
      board: ['XO.', 'OXO', 'XOX'],
    },
    result: 1,
  },
  {
    input: {
      board: ['OOO', 'XOX', 'XXO'],
    },
    result: 1,
  },
  {
    input: {
      board: ['XOX', 'OXO', 'XOX'],
    },
    result: 0,
  },
  {
    input: {
      board: ['OXO', 'XOX', 'OXO'],
    },
    result: 1,
  },
];

describe('혼자서 하는 틱택토', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
