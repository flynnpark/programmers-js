import { solution } from './solution';

const cases = [
  {
    input: {
      storey: 16,
    },
    result: 6,
  },
  {
    input: {
      storey: 2554,
    },
    result: 16,
  },
  {
    input: {
      storey: 54,
    },
    result: 9,
  },
  {
    input: {
      storey: 5,
    },
    result: 5,
  },
  {
    input: {
      storey: 155,
    },
    result: 11,
  },
  {
    input: {
      storey: 75,
    },
    result: 9,
  },
  {
    input: {
      storey: 555,
    },
    result: 15,
  },
];

test('마법의 엘리베이터', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input)) === result);
  });
});
