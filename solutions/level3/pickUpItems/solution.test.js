import { solution } from './solution';

const cases = [
  {
    input: {
      rectangle: [
        [1, 1, 7, 4],
        [3, 2, 5, 5],
        [4, 3, 6, 9],
        [2, 6, 8, 8],
      ],
      characterX: 1,
      characterY: 3,
      itemX: 7,
      itemY: 8,
    },
    result: 17,
  },
  {
    input: {
      rectangle: [
        [1, 1, 8, 4],
        [2, 2, 4, 9],
        [3, 6, 9, 8],
        [6, 3, 7, 7],
      ],
      characterX: 9,
      characterY: 7,
      itemX: 6,
      itemY: 1,
    },
    result: 11,
  },
  {
    input: {
      rectangle: [[1, 1, 5, 7]],
      characterX: 1,
      characterY: 1,
      itemX: 4,
      itemY: 7,
    },
    result: 9,
  },
  {
    input: {
      rectangle: [
        [2, 1, 7, 5],
        [6, 4, 10, 10],
      ],
      characterX: 3,
      characterY: 1,
      itemX: 7,
      itemY: 10,
    },
    result: 15,
  },
  {
    input: {
      rectangle: [
        [2, 2, 5, 5],
        [1, 3, 6, 4],
        [3, 1, 4, 6],
      ],
      characterX: 1,
      characterY: 4,
      itemX: 6,
      itemY: 3,
    },
    result: 10,
  },
];

describe('아이템 줍기', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
