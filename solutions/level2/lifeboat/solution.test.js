import { solution } from './solution';

const cases = [
  {
    input: {
      people: [70, 50, 80, 50],
      limit: 100,
    },
    result: 3,
  },
  {
    input: {
      people: [70, 80, 50],
      limit: 100,
    },
    result: 3,
  },
];

test('구명보트', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
