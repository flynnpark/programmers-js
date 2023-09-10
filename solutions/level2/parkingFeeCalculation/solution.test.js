import { solution } from './solution';

const cases = [
  {
    input: {
      fees: [180, 5000, 10, 600],
      records: [
        '05:34 5961 IN',
        '06:00 0000 IN',
        '06:34 0000 OUT',
        '07:59 5961 OUT',
        '07:59 0148 IN',
        '18:59 0000 IN',
        '19:09 0148 OUT',
        '22:59 5961 IN',
        '23:00 5961 OUT',
      ],
    },
    result: [14600, 34400, 5000],
  },
  {
    input: {
      fees: [120, 0, 60, 591],
      records: [
        '16:00 3961 IN',
        '16:00 0202 IN',
        '18:00 3961 OUT',
        '18:00 0202 OUT',
        '23:58 3961 IN',
      ],
    },
    result: [0, 591],
  },
  {
    input: {
      fees: [1, 461, 1, 10],
      records: ['00:00 1234 IN'],
    },
    result: [14841],
  },
];

describe('주차 요금 계산', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toStrictEqual(result);
  });
});
