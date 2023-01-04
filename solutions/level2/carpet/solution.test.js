import { solution } from './solution';

const cases = [
  {
    input: {
      brown: 10,
      yellow: 2,
    },
    result: [4, 3],
  },
  {
    input: {
      brown: 8,
      yellow: 1,
    },
    result: [3, 3],
  },
  {
    input: {
      brown: 24,
      yellow: 24,
    },
    result: [8, 6],
  },
];

test('카펫', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input))).toStrictEqual(result);
  });
});
