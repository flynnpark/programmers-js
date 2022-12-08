import { solution } from './solution';

const cases = [
  {
    input: { topping: [1, 2, 1, 3, 1, 4, 1, 2] },
    result: 2,
  },
  {
    input: { topping: [1, 2, 3, 1, 4] },
    result: 0,
  },
];

test('롤케이크 자르기', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input)) === result);
  });
});
