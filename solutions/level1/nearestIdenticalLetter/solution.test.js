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

test('가장 가까운 같은 글자', () => {
  cases.forEach(({ input, result }) => {
    expect(solution(...Object.values(input)) === result);
  });
});
