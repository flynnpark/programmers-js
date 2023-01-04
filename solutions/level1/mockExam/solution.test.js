import { solution } from './solution';

const cases = [
  {
    input: {
      answers: [1, 2, 3, 4, 5],
    },
    result: [1],
  },
  {
    input: {
      answers: [1, 3, 2, 4, 2],
    },
    result: [1, 2, 3],
  },
];

test('모의고사', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input))).toStrictEqual(result);
  });
});
