import { solution } from './solution';

const cases = [
  {
    input: {
      phone_number: '01033334444',
    },
    result: '*******4444',
  },
  {
    input: {
      phone_number: '027778888',
    },
    result: '*****8888',
  },
];

describe('핸드폰 번호 가리기', () => {
  test.each(cases)('%o', ({ input, result }) => {
    expect(solution(...Object.values(input))).toBe(result);
  });
});
