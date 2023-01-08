import { solution } from './solution';

const cases = [
  {
    input: {
      numbers: '17',
    },
    result: 3,
  },
  {
    input: {
      numbers: '011',
    },
    result: 2,
  },
];

test('소수 찾기', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
