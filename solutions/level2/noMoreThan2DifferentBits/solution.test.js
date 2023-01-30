import { solution } from './solution';

const cases = [
  {
    input: {
      numbers: [2, 7],
    },
    result: [3, 11],
  },
];

test('2개 이하로 다른 비트', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input))).toStrictEqual(result);
  });
});
