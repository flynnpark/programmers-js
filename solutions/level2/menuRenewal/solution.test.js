import { solution } from './solution';

const cases = [
  {
    input: {
      orders: ['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'],
      course: [2, 3, 4],
    },
    result: ['AC', 'ACDE', 'BCFG', 'CDE'],
  },
  {
    input: {
      orders: ['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'],
      course: [2, 3, 5],
    },
    result: ['ACD', 'AD', 'ADE', 'CD', 'XYZ'],
  },
  {
    input: {
      orders: ['XYZ', 'XWY', 'WXA'],
      course: [2, 3, 4],
    },
    result: ['WX', 'XY'],
  },
];

describe('메뉴 리뉴얼', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toStrictEqual(result);
  });
});
