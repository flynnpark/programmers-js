import { solution } from './solution';

const cases = [
  {
    input: {
      tickets: [
        ['ICN', 'JFK'],
        ['HND', 'IAD'],
        ['JFK', 'HND'],
      ],
    },
    result: ['ICN', 'JFK', 'HND', 'IAD'],
  },
  {
    input: {
      tickets: [
        ['ICN', 'SFO'],
        ['ICN', 'ATL'],
        ['SFO', 'ATL'],
        ['ATL', 'ICN'],
        ['ATL', 'SFO'],
      ],
    },
    result: ['ICN', 'ATL', 'ICN', 'SFO', 'ATL', 'SFO'],
  },
];

describe('여행경로', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toStrictEqual(result);
  });
});
