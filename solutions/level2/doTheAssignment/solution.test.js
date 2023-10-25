import { solution } from './solution';

const cases = [
  {
    input: {
      plans: [
        ['korean', '11:40', '30'],
        ['english', '12:10', '20'],
        ['math', '12:30', '40'],
      ],
    },
    result: ['korean', 'english', 'math'],
  },
  {
    input: {
      plans: [
        ['science', '12:40', '50'],
        ['music', '12:20', '40'],
        ['history', '14:00', '30'],
        ['computer', '12:30', '100'],
      ],
    },
    result: ['science', 'history', 'computer', 'music'],
  },
  {
    input: {
      plans: [
        ['aaa', '12:00', '20'],
        ['bbb', '12:10', '30'],
        ['ccc', '12:40', '10'],
      ],
    },
    result: ['bbb', 'ccc', 'aaa'],
  },
];

describe('과제 진행하기', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toStrictEqual(result);
  });
});
