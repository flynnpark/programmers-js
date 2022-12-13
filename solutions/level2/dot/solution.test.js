import { solution } from './solution';

const cases = [
  {
    input: {
      k: 2,
      d: 4,
    },
    result: 6,
  },
  {
    input: {
      k: 1,
      d: 5,
    },
    result: 26,
  },
];

test('점 찍기', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input)) === result);
  });
});
