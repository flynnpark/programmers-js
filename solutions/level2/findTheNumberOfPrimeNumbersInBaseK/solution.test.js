import { solution } from './solution';

const cases = [
  {
    input: {
      n: 437674,
      k: 3,
    },
    result: 3,
  },
  {
    input: {
      n: 110011,
      k: 10,
    },
    result: 2,
  },
];

test('k진수에서 소수 개수 구하기', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input))).toStrictEqual(result);
  });
});
