import { solution } from './solution';

const cases = [
  {
    input: {
      number: '1924',
      k: 2,
    },
    result: '94',
  },
  {
    input: {
      number: '1231234',
      k: 3,
    },
    result: '3234',
  },
  {
    input: {
      number: '4177252841',
      k: 4,
    },
    result: '775841',
  },
  {
    input: {
      number: '4321',
      k: 1,
    },
    result: '432',
  },
];

test('큰 수 만들기', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
