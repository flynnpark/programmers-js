import { solution } from './solution';

const cases = [
  {
    input: {
      priorities: [2, 1, 3, 2],
      location: 2,
    },
    result: 1,
  },
  {
    input: {
      priorities: [1, 1, 9, 1, 1, 1],
      location: 0,
    },
    result: 5,
  },
];

test('프린터', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input))).toStrictEqual(result);
  });
});
