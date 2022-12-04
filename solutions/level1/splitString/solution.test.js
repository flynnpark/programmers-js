import { solution } from './solution';

const cases = [
  {
    s: 'banana',
    result: 3,
  },
  {
    s: 'abracadabra',
    result: 6,
  },
  {
    s: 'aaabbaccccabba',
    result: 3,
  },
];

test('문자열 나누기', () => {
  cases.forEach(({ s, result }) => {
    expect(solution(s) === result);
  });
});
