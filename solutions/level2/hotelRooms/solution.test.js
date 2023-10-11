import { solution } from './solution';

const cases = [
  {
    input: {
      book_time: [
        ['15:00', '17:00'],
        ['16:40', '18:20'],
        ['14:20', '15:20'],
        ['14:10', '19:20'],
        ['18:20', '21:20'],
      ],
    },
    result: 3,
  },
  {
    input: {
      book_time: [
        ['09:10', '10:10'],
        ['10:20', '12:20'],
      ],
    },
    result: 1,
  },
  {
    input: {
      book_time: [
        ['10:20', '12:30'],
        ['10:20', '12:30'],
        ['10:20', '12:30'],
      ],
    },
    result: 3,
  },
];

describe('호텔 대실', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
