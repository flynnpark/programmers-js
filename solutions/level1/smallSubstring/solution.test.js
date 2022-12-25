import { solution } from './solution';

const cases = [
  {
    input: {
      t: '3141592',
      p: '271',
    },
    result: 2,
  },
  {
    input: {
      t: '500220839878',
      p: '7',
    },
    result: 8,
  },
  {
    input: {
      t: '10203',
      p: '15',
    },
    result: 3,
  },
];

test('크기가 작은 부분문자열', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input)) === result);
  });
});
