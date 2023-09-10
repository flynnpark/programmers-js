import { solution } from './solution';

const cases = [
  {
    input: {
      s: 'banana',
    },
    result: [-1, -1, -1, 2, 2, 2],
  },
  {
    input: {
      s: 'foobar',
    },
    result: [-1, -1, 1, -1, -1, -1],
  },
  {
    input: {
      s: 'oooooo',
    },
    result: [-1, 1, 1, 1, 1, 1],
  },
];

describe('가장 가까운 같은 글자', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toStrictEqual(result);
  });
});
